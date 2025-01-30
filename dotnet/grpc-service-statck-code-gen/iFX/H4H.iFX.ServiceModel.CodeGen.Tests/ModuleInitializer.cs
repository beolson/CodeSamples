using System;
using System.Runtime.CompilerServices;

namespace H4H.iFX.ServiceModel.CodeGen.Tests;

public static class ModuleInitializer
{
    [ModuleInitializer]
    public static void Init() => VerifySourceGenerators.Initialize();
}
