using System.Buffers;
using System.Runtime.InteropServices;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;

namespace H4H.iFX.ServiceModel.CodeGen.Tests.Helpers;

public static class SourceGeneratorTestHelper
{
    public static async Task<VerifyTests.VerifyResult> Verify(
        this IIncrementalGenerator generator,
        string source
    )
    {
        // Parse the provided string into a C# syntax tree
        List<SyntaxTree> trees = new();
        trees.Add(CSharpSyntaxTree.ParseText(source));

        using (var reader = File.OpenText("Protos/LibraryAccess.cs"))
        {
            var fileText = await reader.ReadToEndAsync();
            trees.Add(CSharpSyntaxTree.ParseText(fileText));
        }

        using (var reader = File.OpenText("Protos/LibraryAccessGrpc.cs"))
        {
            var fileText = await reader.ReadToEndAsync();
            trees.Add(CSharpSyntaxTree.ParseText(fileText));
        }

        IEnumerable<PortableExecutableReference> references = new[]
        {
            MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
            MetadataReference.CreateFromFile(typeof(ServiceModelAttribute).Assembly.Location),
            MetadataReference.CreateFromFile(
                typeof(Google.Protobuf.IBufferMessage).Assembly.Location
            ),
            MetadataReference.CreateFromFile(
                typeof(Grpc.Core.AsyncAuthInterceptor).Assembly.Location
            ),
            MetadataReference.CreateFromFile(
                typeof(Grpc.Net.Compression.ICompressionProvider).Assembly.Location
            ),
            MetadataReference.CreateFromFile(typeof(IBufferWriter<>).Assembly.Location),
            MetadataReference.CreateFromFile(
                Path.Combine(RuntimeEnvironment.GetRuntimeDirectory(), "netstandard.dll")
            ),
            MetadataReference.CreateFromFile(
                Path.Combine(RuntimeEnvironment.GetRuntimeDirectory(), "System.Runtime.dll")
            ),
        };

        // Create a Roslyn compilation for the syntax tree.
        CSharpCompilation compilation = CSharpCompilation.Create(
            assemblyName: "Tests",
            syntaxTrees: trees,
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

        var settings = new VerifySettings();
        settings.UseDirectory("Verified");

        return await Verifier.Verify(driver, settings);
    }

    // private static async Task<string> GetAThing()
    // {
    //     return typeof(LibraryAccess.LibraryAccess).Assembly.Location;
    // }
}
