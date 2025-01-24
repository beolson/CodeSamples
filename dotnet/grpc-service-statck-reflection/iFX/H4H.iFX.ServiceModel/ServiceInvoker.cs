using System;
using System.Collections.Concurrent;
using System.Linq.Expressions;
using System.Reflection;

namespace H4H.iFX.ServiceModel;

public class ServiceInvoker
{
    private readonly ConcurrentDictionary<Tuple<Type, Type>, Lazy<Delegate>> _cache =
        new ConcurrentDictionary<Tuple<Type, Type>, Lazy<Delegate>>();

    private static readonly Lazy<ServiceInvoker> lazy = new Lazy<ServiceInvoker>(
        () => new ServiceInvoker()
    );

    public static ServiceInvoker Instance
    {
        get { return lazy.Value; }
    }

    private ServiceInvoker() { }

    public TResponse Invoke<TService, TRequest, TResponse>(
        TService serviceInstance,
        string methodName,
        TRequest request
    )
    {
        var compiled = _cache.GetOrAdd(
            Tuple.Create(typeof(TService), typeof(TRequest)),
            key => new Lazy<Delegate>(() =>
            {
                var method = typeof(TService).GetMethod(
                    methodName,
                    [typeof(TRequest), typeof(Grpc.Core.ServerCallContext)]
                );

                if (method == null)
                {
                    throw new InvalidOperationException(
                        $"Method {methodName} not found in {typeof(TService).Name}"
                    );
                }

                var compiled = Compile<
                    Func<TService, TRequest, Grpc.Core.ServerCallContext, TResponse>
                >(method);

                return compiled;
            })
        );

        var y = compiled.Value as Func<TService, TRequest, Grpc.Core.ServerCallContext, TResponse>;

        //var result = compiled.Invoke(serviceInstance, request, new InProcServerCallContext());
        var result = y.Invoke(serviceInstance, request, new InProcServerCallContext());
        return result;
    }

    private static Delegate Compile<Deletgate>(MethodInfo mi)
    {
        if (mi.IsStatic)
        {
            throw new InvalidOperationException("Method must be instance method");
        }
        ParameterExpression param = Expression.Parameter(mi.DeclaringType, "this");

        var parameters = new List<ParameterExpression> { param };

        foreach (var parameter in mi.GetParameters())
        {
            parameters.Add(Expression.Parameter(parameter.ParameterType, parameter.Name));
        }

        Expression call = Expression.Call(param, mi, parameters.Skip(1));

        return Expression.Lambda(call, parameters).Compile();
    }
}
