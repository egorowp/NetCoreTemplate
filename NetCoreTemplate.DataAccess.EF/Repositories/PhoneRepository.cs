using System.Collections.Generic;
using System.Linq;
using NetCoreTemplate.DataAccess.Contracts.Repositories;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Domain.Models;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.DataAccess.EF.Repositories
{
    public class PhoneRepository : BaseRepository<Phone>, IPhoneRepository
    {
        public PhoneRepository(DatabaseContext databaseContext, ILoggerProvider loggerProvider) 
            : base(databaseContext, loggerProvider)
        {
        }

        public IEnumerable<PhoneViewModel> GetPhones()
        {
            var result = GetAll().Select(p => new PhoneViewModel
            {
                Id = p.Id,
                Company = p.Company,
                Name = p.Name,
                Price = p.Price
            }).ToList();
            return result;
        }

        public PhoneViewModel Save(SavePhoneParams parameters)
        {
            var phone = base.Get(parameters.Id);
            if (phone != null)
            {
                phone.Company = parameters.Company;
                phone.Name = parameters.Name;
                phone.Price = parameters.Price;
                DatabaseContext.Phones.Update(phone);
            }
            else
            {
                phone = new Phone
                {
                    Company = parameters.Company,
                    Name = parameters.Name,
                    Price = parameters.Price

                };
                DatabaseContext.Phones.Add(phone);
            }
            SaveChanges();
            return new PhoneViewModel(phone);
        }

        public bool Delete(IdParams parameters)
        {
            var phone = base.Get(parameters.Id);
            if (phone != null)
            {
                DatabaseContext.Phones.Remove(phone);
                SaveChanges();
            }
            return true;
        }

        public PhoneViewModel Get(IdParams parameters)
        {
            var phone = base.Get(parameters.Id);
            if (phone != null)
            {
                var result = new PhoneViewModel
                {
                    Id = phone.Id,
                    Company = phone.Company,
                    Name = phone.Name,
                    Price = phone.Price
                };
                return result;
            }
            return null;
        }
    }
}