using Autofac;
using NetCoreTemplate.Business.Contracts.Managers;
using NetCoreTemplate.Business.Managers;

namespace NetCoreTemplate.IoC.Autofac.Autofac
{
    public class ServicesModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<PhoneManager>().As<IPhoneManager>();
        }
    }
}