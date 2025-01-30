using System;

namespace H4H.iFX.ServiceModel;

[System.AttributeUsage(System.AttributeTargets.Class)]
public class ServiceModelAttribute : System.Attribute { }

[AttributeUsage(AttributeTargets.Assembly)]
public class ServiceClientAttribute<TClient, TServiceBase> : Attribute
    where TClient : Grpc.Core.ClientBase
    where TServiceBase : class { }
