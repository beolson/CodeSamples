using Grpc.Core;
using Grpc.Core.Interceptors;

namespace H4H.iFX.ServiceModel;


public class InProcIntercepter<TService> : Interceptor
{
    private readonly TService _service;
    private readonly ServiceInvoker _serviceInvoker;

    public InProcIntercepter(TService service, ServiceInvoker serviceInvoker)
    {
        _service = service;
        _serviceInvoker = serviceInvoker;
    }

    // public override AsyncUnaryCall<TResponse> AsyncUnaryCall<TRequest, TResponse>(TRequest request, ClientInterceptorContext<TRequest, TResponse> context, AsyncUnaryCallContinuation<TRequest, TResponse> continuation)
    // {
    //     return base.AsyncUnaryCall(request, context, continuation);
    // }

    public override AsyncUnaryCall<TResponse> AsyncUnaryCall<TRequest, TResponse>(
        TRequest request,
        ClientInterceptorContext<TRequest, TResponse> context,
        AsyncUnaryCallContinuation<TRequest, TResponse> continuation
    )
    {
        var result = _serviceInvoker.Invoke<TService, TRequest, Task<TResponse>>(
            _service,
            context.Method.Name,
            request
        );

        // var requestType = request.GetType();
        // var method = context.Method.Name;
        // var mi = typeof(TService).GetMethod(method);
        // // _service.

        // var initalREsponse = mi?.Invoke(
        //     _service,
        //     new object[] { request, new InProcServerCallContext() }
        // );

        // var result = initalREsponse as Task<TResponse>;

        return new AsyncUnaryCall<TResponse>(
            result,
            Task.FromResult(new Metadata()),
            () => new Status(),
            () => new Metadata(),
            () => { }
        );
    }
}
