using System;
using System.Collections.Generic;

namespace NetCoreTemplate.Domain.Parameters
{
    public class SaveAddressParams : Serializable
    {
        public IEnumerable<Guid> PhoneIds { get; set; }

        public string PostalCode { get; set; }

        public string AddressLine { get; set; }

        public Guid Id { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string State { get; set; }
    }
}