using System;
using BenchmarkDotNet.Attributes;
using H4H.iFX.ServiceModel;
using LibraryAccess.Service;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using static LibraryAccess.LibraryAccessService;

namespace TestHost;

public class InProcInvokeBenchmarks
{
    private IHost _host;

    [GlobalSetup]
    public void GlobalSetup()
    {
        _host = Host.CreateDefaultBuilder()
            .ConfigureServices(services =>
            {
                services.AddTransient<LibraryAccessService>();
                services.AddSingleton<ServiceInvoker>(sp => ServiceInvoker.Instance);
                services.AddTransient<InProcIntercepter<LibraryAccessService>>();
                services
                    .AddGrpcClient<LibraryAccessServiceClient>(o =>
                        o.Address = new Uri("http://localhost:5000")
                    )
                    .AddInterceptor<InProcIntercepter<LibraryAccessService>>();
            })
            .Build();

        _host.Start();
    }

    [Benchmark]
    public async Task DirectCall()
    {
        var _underTest = _host.Services.GetRequiredService<LibraryAccessService>();
        await _underTest.GetMessage(
            new LibraryAccess.GetMessageRequest { Name = "World" },
            new InProcServerCallContext()
        );
    }

    [Benchmark]
    public async Task RunViaClientWithIntercepter()
    {
        var _underTest = _host.Services.GetRequiredService<LibraryAccessServiceClient>();
        await _underTest.GetMessageAsync(new LibraryAccess.GetMessageRequest { Name = "World" });
    }

    [Benchmark]
    public async Task<string> JustServiceInvoker()
    {
        var _underTestInvoker = _host.Services.GetRequiredService<ServiceInvoker>();
        var _underTestService = _host.Services.GetRequiredService<LibraryAccessService>();

        var result = _underTestInvoker.Invoke<
            LibraryAccessService,
            LibraryAccess.GetMessageRequest,
            Task<LibraryAccess.GetMessageReply>
        >(_underTestService, "GetMessage", new LibraryAccess.GetMessageRequest { Name = "World" });

        return (await result).Message;
    }
}
