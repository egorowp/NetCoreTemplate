using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

namespace NetCoreTemplate.DataAccess.EF.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("NetCoreTemplate.Domain.Models.Address", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AddressLine");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<DateTime>("ModifyDate");

                    b.Property<string>("PostalCode");

                    b.Property<string>("State");

                    b.HasKey("Id");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("NetCoreTemplate.Domain.Models.AddressPhone", b =>
                {
                    b.Property<Guid>("AddressId");

                    b.Property<Guid>("PhoneId");

                    b.HasKey("AddressId", "PhoneId");

                    b.HasIndex("PhoneId");

                    b.ToTable("AddressPhone");
                });

            modelBuilder.Entity("NetCoreTemplate.Domain.Models.Phone", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Company");

                    b.Property<string>("Name");

                    b.Property<int>("Price");

                    b.HasKey("Id");

                    b.ToTable("Phones");
                });

            modelBuilder.Entity("NetCoreTemplate.Domain.Models.AddressPhone", b =>
                {
                    b.HasOne("NetCoreTemplate.Domain.Models.Address", "Address")
                        .WithMany("AddressPhones")
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("NetCoreTemplate.Domain.Models.Phone", "Phone")
                        .WithMany("AddressPhones")
                        .HasForeignKey("PhoneId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
