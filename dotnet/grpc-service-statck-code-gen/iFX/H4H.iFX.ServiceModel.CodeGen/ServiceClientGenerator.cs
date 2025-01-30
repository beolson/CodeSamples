using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Text;

namespace H4H.iFX.ServiceModel.CodeGen;

[Generator]
public class ServiceClientGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var enumsToGenerate = context.SyntaxProvider.ForAttributeWithMetadataName(
            fullyQualifiedMetadataName: "H4H.iFX.ServiceModel.ServiceClientAttribute`2",
            predicate: static (s, _) => true,
            transform: static (ctx, _) =>
            {
                var result = new List<ServiceClientModel>();
                foreach (var item in ctx.Attributes)
                {
                    if (
                        item?.AttributeClass?.TypeArguments[0] is INamedTypeSymbol clientType
                        && item?.AttributeClass?.TypeArguments[1] is INamedTypeSymbol serverBaseType
                    )
                    {
                        result.Add(new ServiceClientModel(clientType, serverBaseType));
                    }
                }

                return result;
            }
        );

        context.RegisterSourceOutput(enumsToGenerate, static (spc, source) => Execute(source, spc));
    }

    static void Execute(
        IEnumerable<ServiceClientModel> clientsToGenerate,
        SourceProductionContext context
    )
    {
        foreach (var client in clientsToGenerate)
        {
            context.AddSource(
                $"I{client.RootName}.g.cs",
                SourceText.From(client.RenderInterface(), Encoding.UTF8)
            );
        }
    }
}
