using Autofac;
using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.DataAccess;
using NetCoreTemplate.DataAccess.Repositories;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Domain.Contracts.Repositories;

namespace NetCoreTemplate.Autofac.Autofac
{
    public class DatabaseModule : Module
    {
        public string ConnectionString { get; set; }

        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);

            var optionsBuilder = new DbContextOptionsBuilder<DatabaseContext>();
            optionsBuilder.UseSqlServer(ConnectionString);

            builder.Register(c => new DatabaseContext(optionsBuilder.Options))
                .InstancePerLifetimeScope();

            //Repositories
            builder.RegisterType<PhoneRepository>().As<IPhoneRepository>();

            //RepositoryContext
            builder.RegisterType<RepositoryContext>().As<IRepositoriesContext>();
        }
    }
}