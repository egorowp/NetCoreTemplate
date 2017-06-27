using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using NetCoreTemplate.Autofac.Autofac;
using NetCoreTemplate.Domain.DTOs;

namespace NetCoreTemplate.Autofac
{
    public class AutofacConfigurator
    {
        public static AutofacConfiguratorDto Configure(IServiceCollection services, string connectionString)
        {
            // Create the container builder.
            var builder = new ContainerBuilder();

            // Register dependencies, populate the services from
            // the collection, and build the container. If you want
            // to dispose of the container at the end of the app,
            // be sure to keep a reference to it as a property or field.
            builder.RegisterModule<ServicesModule>();
            builder.RegisterModule<ProvidersModule>();
            builder.RegisterModule(new DatabaseModule()
            {
                ConnectionString = connectionString
            });

            builder.Populate(services);
            var applicationContainer = builder.Build();

            var result = new AutofacConfiguratorDto {
                ServiceProvider = new AutofacServiceProvider(applicationContainer),
                DisposeAction = () => applicationContainer.Dispose()
                };
            return result;

        }
    }
}
