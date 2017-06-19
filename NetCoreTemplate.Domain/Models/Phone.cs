using System;

namespace NetCoreTemplate.Domain.Models
{
    public class Phone
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public int Price { get; set; }
    }
}