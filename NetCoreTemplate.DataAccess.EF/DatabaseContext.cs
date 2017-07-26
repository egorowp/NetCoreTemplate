using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.DataAccess.EF.EntityConfiguration;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.DataAccess.EF
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Phone> Phones { get; set; }

        public DbSet<Address> Addresses { get; set; }

        // Need to create migrations
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Data Source=(local);Initial Catalog=NetCoreTempale;User Id=sa;Password=password");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AddressPhone>(AddressPhoneConfiguration.BuildAction);
        }
    }
}
