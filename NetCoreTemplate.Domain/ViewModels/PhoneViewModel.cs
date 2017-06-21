using System;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.Domain.ViewModels
{
    public class PhoneViewModel
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

        public String Company { get; set; }

        public String Name { get; set; }

        public int Price { get; set; }
    }
}
