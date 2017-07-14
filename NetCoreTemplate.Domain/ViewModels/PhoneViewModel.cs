using System;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.Domain.ViewModels
{
    public class PhoneViewModel : Serializable
    {

        public PhoneViewModel()
        {
            
        }

        public PhoneViewModel(Phone phone)
        {
            Id = phone.Id;
            Company = phone.Company;
            Name = phone.Name;
            Price = phone.Price;
        }

        public Guid Id { get; set; }

        public string Company { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }
    }
}
