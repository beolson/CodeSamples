using System.Threading.Tasks;
using H4H.iFX.ServiceModel.CodeGen.Tests.Helpers;
using Microsoft.CodeAnalysis;

namespace H4H.iFX.ServiceModel.CodeGen.Tests;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        Assert.True(true);
    }

    [Fact]
    public async Task Test2()
    {
        var source =
            @"
                using H4H.iFX.ServiceModel;

                namespace LibraryAccess;

                [ServiceModel]
                public static partial class LibraryAccess { }

            ";

        IIncrementalGenerator generator = new ServiceClientGenerator();
        await generator.Verify(source);
    }
}
