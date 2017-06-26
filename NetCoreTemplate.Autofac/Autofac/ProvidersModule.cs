using Autofac;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Logger;

namespace NetCoreTemplate.Autofac.Autofac
{
    public class ProvidersModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<LoggerProvider>().As<ILoggerProvider>();
        }
    }
}