using System;
using System.Collections.Generic;
using System.Text;
using DotLiquid;

namespace H4H.iFX.ServiceModel.CodeGen;

static class ClientInterfaceSourceGenerationHelper
{
    static Template template = Template.Parse(
        @"
 {{sc.root_name}}
    "
    );

    static Template template2 = Template.Parse("hi {{name}}");

    public static string RenderInterface(this ServiceClientModel model)
    {
        var hash = Hash.FromAnonymousObject(new { sc = model });

        var result = template.Render(hash);
        return result;
    }
}
