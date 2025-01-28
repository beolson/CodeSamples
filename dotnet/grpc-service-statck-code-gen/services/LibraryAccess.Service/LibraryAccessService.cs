using Grpc.Core;
using static LibraryAccess.LibraryAccess;

namespace LibraryAccess.Service;

public class LibraryAccessService : LibraryAccessBase
{
    public override async Task<GetMessageReply> GetMessage(
        GetMessageRequest request,
        ServerCallContext context
    )
    {
        return new GetMessageReply { Message = "Hello " + request.Name };
    }
}
