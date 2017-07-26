using System;

namespace NetCoreTemplate.Domain.Models
{
    public class AddressPhone 
    {
        public AddressPhone()
        {
            
        }

        public AddressPhone(Phone phone, Address address)
        {
            Phone = phone;
            Address = address;
            AddressId = address.Id;
            PhoneId = phone.Id;
        }

        public Guid AddressId { get; set; }

        public Address Address { get; set; }

        public Guid PhoneId { get; set; }

        public Phone Phone { get; set; }
    }
}