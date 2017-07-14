using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NetCoreTemplate.IoC.Autofac;

namespace NetCoreTemplate.Web
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            this.Configuration = builder.Build();
        }

        public Action DisposeAction { get; private set; }

        public IConfigurationRoot Configuration { get; private set; }

        // ConfigureServices is where you register dependencies. This gets
        // called by the runtime before the Configure method, below.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // Add services to the collection.
            services.AddMvc();

            var autofacConfiguratorDto = AutofacConfigurator.Configure(services, Configuration.GetConnectionString("DefaultConnection"));

            DisposeAction = autofacConfiguratorDto.DisposeAction;

            return autofacConfiguratorDto.ServiceProvider;
        }



        // Configure is where you add middleware. This is called after
        // ConfigureServices. You can use IApplicationBuilder.ApplicationServices
        // here if you need to resolve things from the container.
        public void Configure(
            IApplicationBuilder app,
            ILoggerFactory loggerFactory,
            IApplicationLifetime appLifetime,
            IHostingEnvironment env)
        {
            loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var angularRoutes = new[]
            {
                "/default",
                "/home"
            };

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "API Default",
                    template: "api/{controller}/{action}/{id?}"
                );
                routes.MapSpaFallbackRoute(
                     name: "SPA Default",
                     defaults: new { controller = "Home", action = "Index" }
                 );
            });

            // If you want to dispose of resources that have been resolved in the
            // application container, register for the "ApplicationStopped" event.
            appLifetime.ApplicationStopped.Register(DisposeAction);
        }
    }
}
