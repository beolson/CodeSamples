using System.Collections.Generic;
using System.Linq;
using Microsoft.CodeAnalysis;

namespace H4H.iFX.ServiceModel.CodeGen;

[Generator]
public class ServiceClientGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var enumsToGenerate = context.SyntaxProvider.ForAttributeWithMetadataName(
            fullyQualifiedMetadataName: "H4H.iFX.ServiceModel.ServiceClientAttribute`1",
            predicate: static (s, _) => true,
            transform: static (ctx, _) =>
            {
                var x = ctx
                    .Attributes.Select(a => a.AttributeClass)
                    .Select(a => a.TypeArguments[0].Name)
                    .ToList();

                var model = GetAThing(ctx.SemanticModel, ctx.TargetNode);

                return new List<string> { "one", "two" };
            }
        );

        context.RegisterSourceOutput(enumsToGenerate, static (spc, source) => Execute(source, spc));
    }

    static void Execute(IEnumerable<string> enumToGenerate, SourceProductionContext context)
    {
        if (enumToGenerate is { } value)
        {
            // generate the source code and add it to the output
            // string result = SourceGenerationHelper.GenerateExtensionClass(value);
            // // Create a separate partial class file for each enum
            // context.AddSource(
            //     $"EnumExtensions.{value.Name}.g.cs",
            //     SourceText.From(result, Encoding.UTF8)
            // );
        }
    }

    static string? GetAThing(SemanticModel semanticModel, SyntaxNode enumDeclarationSyntax)
    {
        if (
            semanticModel.GetDeclaredSymbol(enumDeclarationSyntax)
            is not INamedTypeSymbol outerClassSymbol
        )
        {
            // something went wrong
            return null;
        }

        var enumName = outerClassSymbol.GetMembers().ToList();

        var members = outerClassSymbol
            .GetMembers()
            .Where(x => x.Kind == SymbolKind.NamedType)
            .ToList();

        return "one";
        // ITypeSymbol client = ctx.Attributes[0].AttributeClass.TypeArguments[0];

        // var members = client
        //     .GetMembers()
        //     .Where(x => x.DeclaredAccessibility == Accessibility.Public)
        //     .Where(x => x.Kind == SymbolKind.Method)
        //     .OfType<IMethodSymbol>()
        //     .Where(x => x.MethodKind == MethodKind.Ordinary)
        //     .ToList();

        // var attributes = client.GetAttributes();

        // var clientNamespace = client.ContainingNamespace.ToDisplayString();

        // foreach (var member in members)
        // {
        //     var name = member.Name;
        //     var returnType = member.ReturnType.ToDisplayString();

        //     foreach (var param in member.Parameters)
        //     {
        //         var pname = param.Name;
        //         var ptype = param.Type.ToDisplayString();
        //     }
        // }
    }

    static string? GetEnumToGenerate(GeneratorAttributeSyntaxContext ctx)
    {
        ITypeSymbol client = ctx.Attributes[0].AttributeClass.TypeArguments[0];

        var members = client
            .GetMembers()
            .Where(x => x.DeclaredAccessibility == Accessibility.Public)
            .Where(x => x.Kind == SymbolKind.Method)
            .OfType<IMethodSymbol>()
            .Where(x => x.MethodKind == MethodKind.Ordinary)
            .ToList();

        var attributes = client.GetAttributes();

        var clientNamespace = client.ContainingNamespace.ToDisplayString();

        foreach (var member in members)
        {
            var name = member.Name;
            var returnType = member.ReturnType.ToDisplayString();

            foreach (var param in member.Parameters)
            {
                var pname = param.Name;
                var ptype = param.Type.ToDisplayString();
            }
        }

        return "one";
    }
}
