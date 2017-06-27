using Autofac;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Domain.Contracts.Services;
using NetCoreTemplate.Logic.Services;

namespace NetCoreTemplate.Autofac.Autofac
{
    public class ServicesModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<PhoneService>().As<IPhoneService>();
        }
    }
}