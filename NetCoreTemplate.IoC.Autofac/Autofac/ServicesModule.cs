using Autofac;
using NetCoreTemplate.Business.Contracts;
using NetCoreTemplate.Business.Services;

namespace NetCoreTemplate.IoC.Autofac.Autofac
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