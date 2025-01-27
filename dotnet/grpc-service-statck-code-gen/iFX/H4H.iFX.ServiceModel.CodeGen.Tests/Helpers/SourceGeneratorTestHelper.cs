using System.Runtime.InteropServices;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;

namespace H4H.iFX.ServiceModel.CodeGen.Tests.Helpers;

public static class SourceGeneratorTestHelper
{
    public static async Task<SettingsTask> Verify(
        this IIncrementalGenerator generator,
        string source
    )
    {
        // Parse the provided string into a C# syntax tree
        SyntaxTree syntaxTree = CSharpSyntaxTree.ParseText(source);

        var st = await GetAThing();

        IEnumerable<PortableExecutableReference> references = new[]
        {
            MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
            MetadataReference.CreateFromFile(typeof(ServiceModelAttribute).Assembly.Location),
            //     // MetadataReference.CreateFromFile(typeof(GreeterClient).Assembly.Location),
            // MetadataReference.CreateFromFile(
            //     Path.Combine(RuntimeEnvironment.GetRuntimeDirectory(), "netstandard.dll")
            // ),
            MetadataReference.CreateFromFile(
                Path.Combine(RuntimeEnvironment.GetRuntimeDirectory(), "System.Runtime.dll")
            ),
            //     // MetadataReference.CreateFromFile(typeof(Grpc.Core.ClientBase).Assembly.Location),
        };

        // Create a Roslyn compilation for the syntax tree.
        CSharpCompilation compilation = CSharpCompilation.Create(
            assemblyName: "Tests",
            syntaxTrees: new[] { syntaxTree },
            references: references
        );

        var preErrors = compilation
            .GetDiagnostics()
            .Where(d => d.Severity == DiagnosticSeverity.Error && d.Id != "CS5001");

        Assert.Empty(preErrors);

        // Create an instance of our EnumGenerator incremental source generator

        // The GeneratorDriver is used to run our generator against a compilation
        GeneratorDriver driver = CSharpGeneratorDriver.Create(generator);

        // Run the source generator!
        driver = driver.RunGenerators(compilation);

        var postErrors = compilation
            .GetDiagnostics()
            .Where(d => d.Severity == DiagnosticSeverity.Error && d.Id != "CS5001");

        Assert.Empty(postErrors);
        // Use verify to snapshot test the source generator output!

        var settings = new VerifySettings();
        settings.UseDirectory("Verified");

        return Verifier.Verify(driver, settings);
    }

    private static async Task<string> GetAThing()
    {
        return typeof(LibraryAccess.LibraryAccess).Assembly.Location;
    }
}
