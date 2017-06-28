using System;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Domain.Parameters
{
    public class SavePhoneParams : Serializable
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Company { get; set; }

        public int Price { get; set; }
    }
}
