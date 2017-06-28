using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.DataAccess.EF
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Phone> Phones { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DatabaseContext() : base()
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(local);Initial Catalog=NetCoreTempale;User Id=sa;Password=password");
        }
    }
}
