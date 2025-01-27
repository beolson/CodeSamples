using BenchmarkDotNet.Running;
using TestHost;

public class Program
{
    public static void Main(string[] args)
    {
        if (args.Contains("benchmark"))
        {
            var summary = BenchmarkRunner.Run<InProcInvokeBenchmarks>();
        }
        else { }
    }
}
