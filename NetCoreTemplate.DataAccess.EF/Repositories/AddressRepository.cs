using System;
using System.Collections.Generic;
using System.Linq;
using NetCoreTemplate.DataAccess.Contracts.Repositories;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Domain.Models;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.DataAccess.EF.Repositories
{
    public class AddressRepository : BaseRepository<Address>, IAddressRepository
    {
        public AddressRepository(DatabaseContext databaseContext, ILoggerProvider loggerProvider)
            : base(databaseContext, loggerProvider)
        {
        }

        public IEnumerable<AddressGridViewModel> GetAddresses()
        {
            var result = GetAll().Select(address => new AddressGridViewModel
            {
                Id = address.Id,
                State = address.State,
                Country = address.Country,
                City = address.City,
                ModifyDate = address.ModifyDate,
                AddressLine = address.AddressLine,
                PostalCode = address.PostalCode
            }).ToList();
            return result;
        }

        public AddressViewModel Save(SaveAddressParams parameters)
        {
            var phones = DatabaseContext.Phones.Where(p => parameters.SelectedPhoneIds.Contains(p.Id));
            var address = base.Get(parameters.Id);
            if (address != null)
            {
                address.Id = parameters.Id;
                address.State = parameters.State;
                address.Country = parameters.Country;
                address.City = parameters.City;
                address.ModifyDate = DateTime.Now;
                address.AddressLine = parameters.AddressLine;
                address.PostalCode = parameters.PostalCode;
                DatabaseContext.Entry(address).Collection(a => a.AddressPhones).Load();
                address.AddressPhones.Clear();
                Update(address);
            }
            else
            {
                address = new Address()
                {
                    Id = parameters.Id,
                    State = parameters.State,
                    Country = parameters.Country,
                    City = parameters.City,
                    ModifyDate = DateTime.Now,
                    AddressLine = parameters.AddressLine,
                    PostalCode = parameters.PostalCode
                };
                base.Add(address);
            }
            foreach (var phone in phones)
            {
                address.AddressPhones.Add(new AddressPhone(phone, address));
            }
            SaveChanges();
            return new AddressViewModel(address);
        }

        public bool Delete(IdParams parameters)
        {
            var address = base.Get(parameters.Id);
            if (address != null)
            {
                Delete(address);
            }
            return true;
        }

        public AddressViewModel Get(IdParams parameters)
        {
            var address = base.Get(parameters.Id);
            if (address != null)
            {
                DatabaseContext.Entry(address).Collection(a => a.AddressPhones).Load();
                var result = new AddressViewModel(address);
                return result;
            }
            return null;
        }
    }
}