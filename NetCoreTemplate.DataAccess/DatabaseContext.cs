﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design.Internal;
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

        public DatabaseContext() : base()
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(local);Initial Catalog=NetCoreTempale;User Id=sa;Password=password");
        }
    }
}