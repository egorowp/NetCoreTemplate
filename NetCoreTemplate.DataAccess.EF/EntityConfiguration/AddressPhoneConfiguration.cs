using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.DataAccess.EF.EntityConfiguration
{
    public class AddressPhoneConfiguration 
    {
        public static void BuildAction(EntityTypeBuilder<AddressPhone> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(ap => new {ap.AddressId, ap.PhoneId});

            entityTypeBuilder.HasOne(ap => ap.Address)
                .WithMany(a => a.AddressPhones)
                .HasForeignKey(ap => ap.AddressId);

            entityTypeBuilder.HasOne(ap => ap.Phone)
                .WithMany(a => a.AddressPhones)
                .HasForeignKey(ap => ap.PhoneId);
        }
    }
}