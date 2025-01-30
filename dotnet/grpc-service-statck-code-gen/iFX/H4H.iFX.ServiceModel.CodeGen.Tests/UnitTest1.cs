using System.Threading.Tasks;
using H4H.iFX.ServiceModel.CodeGen.Tests.Helpers;
using Microsoft.CodeAnalysis;

namespace H4H.iFX.ServiceModel.CodeGen.Tests;

public class VerifyChecksTests
{
    [Fact]
    public Task Run() => VerifyChecks.Run();
}

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        Verify(new UnitTest1());
    }

    [Fact]
    public async Task Test2()
    {
        var source =
            @"
                using H4H.iFX.ServiceModel;
                using static LibraryAccess.LibraryAccess;
                [assembly: ServiceClient<LibraryAccessClient, LibraryAccessBase>()]
                

            ";

        IIncrementalGenerator generator = new ServiceClientGenerator();
        var x = await generator.Verify(source);
    }
}
