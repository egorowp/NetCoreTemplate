using Autofac;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Logger;
using NetCoreTemplate.Logger.NLog;

namespace NetCoreTemplate.IoC.Autofac.Autofac
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