using System;
using Microsoft.CodeAnalysis;

namespace H4H.iFX.ServiceModel.CodeGen;

public class ServiceClientModel
{
    private INamedTypeSymbol _clientType { get; set; }
    private INamedTypeSymbol _serverBaseType { get; set; }

    public ServiceClientModel(INamedTypeSymbol clientType, INamedTypeSymbol serverBaseType)
    {
        _clientType = clientType;
        _serverBaseType = serverBaseType;

        Console.WriteLine($"clientType: {clientType}");
        RootName = clientType.Name.Remove(
            clientType.Name.Length - 6 /* "Client" */
        );
    }

    public string RootName { get; set; }

    public string RenderInterface()
    {
        return $@"
            using System;

            namespace LibraryAccess;

            public interface I{RootName}
            {{
            
            }}
        ";
    }
}
