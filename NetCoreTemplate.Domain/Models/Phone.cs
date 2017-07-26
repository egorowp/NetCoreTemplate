using System;
using System.Collections.Generic;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.Domain.Models
{
    public class Phone : IEntity
    {
        public ICollection<AddressPhone> AddressPhones { get; set; }

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Company { get; set; }

        public int Price { get; set; }
    }
}