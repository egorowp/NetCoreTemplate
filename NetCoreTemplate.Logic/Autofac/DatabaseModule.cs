using Autofac;
using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.DataAccess;

namespace NetCoreTemplate.Logic.Autofac
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
        }
    }
}