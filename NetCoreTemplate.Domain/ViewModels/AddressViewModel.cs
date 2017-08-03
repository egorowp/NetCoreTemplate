using System;
using System.Collections.Generic;
using System.Linq;
using NetCoreTemplate.Domain.Models;

namespace NetCoreTemplate.Domain.ViewModels
{
    public class AddressViewModel : Serializable
    {

        public AddressViewModel()
        {

        }

        public AddressViewModel(Address address)
        {
            Id = address.Id;
            Country = address.Country;
            City = address.City;
            State = address.State;
            AddressLine = address.AddressLine;
            PostalCode = address.PostalCode;
            SelectedPhoneIds = address.AddressPhones.Select(ap =>ap.PhoneId);
        }

        public IEnumerable<Guid> SelectedPhoneIds { get; set; }

        public string PostalCode { get; set; }

        public string AddressLine { get; set; }

        public Guid Id { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public IEnumerable<PhoneLookupViewModel> Phones { get; set; }
    }
}