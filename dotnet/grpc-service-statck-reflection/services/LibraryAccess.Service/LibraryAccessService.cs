using Grpc.Core;
using static LibraryAccess.LibraryAccessService;

namespace LibraryAccess.Service;

public class LibraryAccessService : LibraryAccessServiceBase
{
    public override async Task<GetMessageReply> GetMessage(
        GetMessageRequest request,
        ServerCallContext context
    )
    {
        // await Task.Delay(1000);
        return new GetMessageReply { Message = "Hello " + request.Name };
    }
}
