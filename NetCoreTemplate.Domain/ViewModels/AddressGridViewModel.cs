using System;
using System.Collections.Generic;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.Domain.ViewModels
{
    public class AddressGridViewModel : Serializable
    {
        public AddressGridViewModel()
        {

        }

        public AddressGridViewModel(Address address)
        {
            Id = address.Id;
            Country = address.Country;
            City = address.City;
            State = address.State;
            AddressLine =address.AddressLine;
            PostalCode = address.PostalCode;
            ModifyDate = address.ModifyDate;
        }

        public DateTime ModifyDate { get; set; }

        public string PostalCode { get; set; }

        public string AddressLine { get; set; }

        public Guid Id { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string State { get; set; }
    }
}