using System;
using System.Collections.Generic;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.Domain.Models
{
    public class Address : IEntity
    {
        public Address()
        {
            AddressPhones = new HashSet<AddressPhone>();
        }

        public HashSet<AddressPhone> AddressPhones { get; set; }

        public Guid Id { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string PostalCode { get; set; }

        public string AddressLine { get; set; }

        public DateTime ModifyDate { get; set; }
    }
}