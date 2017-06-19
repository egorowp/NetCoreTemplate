using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.DataAccess
{
    public class DatabaseContext : DbContext
        {
            public DbSet<Phone> Phones { get; set; }
            public DatabaseContext(DbContextOptions<DatabaseContext> options)
                : base(options)
            {
            }
        }

}
