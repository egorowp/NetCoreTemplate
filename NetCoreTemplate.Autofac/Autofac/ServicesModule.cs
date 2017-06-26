using Autofac;
using NetCoreTemplate.Domain.Contracts;
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