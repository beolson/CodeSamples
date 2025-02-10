using System;
using System.Collections.Generic;
using System.Linq;
using DotLiquid;
using Microsoft.CodeAnalysis;

namespace H4H.iFX.ServiceModel.CodeGen;

[LiquidType("ParameterName", "ParameterType")]
class ParameterModel
{
    public ParameterModel(IParameterSymbol parameterSymbol)
    {
        ParameterName = parameterSymbol.Name;
        ParameterType = parameterSymbol.Type.Name;
    }

    public string ParameterName { get; set; }
    public string ParameterType { get; set; }
}

[LiquidType("FunctionName", "FunctionReturnType", "Parameters")]
class MemberFunctionModel
{
    public MemberFunctionModel(IMethodSymbol methodSymbol)
    {
        FunctionName = methodSymbol.Name;
        FunctionReturnType = methodSymbol.ReturnType.Name;
        Parameters = methodSymbol.Parameters.Select(s => new ParameterModel(s)).ToList();
    }

    public string FunctionName { get; set; }
    public string FunctionReturnType { get; set; }
    public List<ParameterModel> Parameters { get; set; } = new List<ParameterModel>();
}

[LiquidType("RootName", "NamespaceName", "Method")]
class ServiceClientModel
{
    public ServiceClientModel(INamedTypeSymbol clientType, INamedTypeSymbol serverBaseType)
    {
        Console.WriteLine($"clientType: {clientType}");
        RootName = clientType.Name.Remove(
            clientType.Name.Length - 6 /* "Client" */
        );

        NameSpaceName = clientType.ContainingNamespace.Name;

        foreach (var member in clientType.GetMembers())
        {
            if (
                member.Kind == SymbolKind.Method
                && member.DeclaredAccessibility == Accessibility.Public
                && member is IMethodSymbol m
            )
            {
                Method.Add(new MemberFunctionModel(m));
            }
        }
    }

    public string RootName { get; set; }
    public string NameSpaceName { get; set; }

    public List<MemberFunctionModel> Method { get; set; } = new List<MemberFunctionModel>();
}
