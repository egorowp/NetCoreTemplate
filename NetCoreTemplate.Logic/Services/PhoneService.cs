using NetCoreTemplate.Domain.Contracts;
using System;
using System.Linq;
using NetCoreTemplate.DataAccess;
using NetCoreTemplate.Domain.Models;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Logic.Services
{
    public class PhoneService : IPhoneService
    {
        private readonly DatabaseContext _dbContext;

        public PhoneService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Guid AddNew(string name, string company, int price)
        {
            var phone = _dbContext.Phones.Add(new Phone()
            {
                Company = company,
                Name = name,
                Price = price
            });
            _dbContext.SaveChanges();

            return phone.Entity.Id;
        }

        public PhoneViewModel[] GetAll()
        {
            var result = _dbContext.Phones.Select(p => new PhoneViewModel
            {
                Id = p.Id,
                Company = p.Company,
                Name = p.Name,
                Price = p.Price
            });
            return result.ToArray();
        }

        public PhoneViewModel Save(SavePhoneParams parameters)
        {
            var phone = _dbContext.Phones.FirstOrDefault(u => u.Id == parameters.Id);
            if (phone != null)
            {
                phone.Company = parameters.Company;
                phone.Name = parameters.Name;
                phone.Price = parameters.Price;
                _dbContext.Phones.Update(phone);
            }
            else
            {
                phone = new Phone()
                {
                    Company = parameters.Company,
                    Name = parameters.Name,
                    Price = parameters.Price

                };
                _dbContext.Phones.Add(phone);
            }
            _dbContext.SaveChanges();

            return new PhoneViewModel(phone);
        }

        public bool Delete(DeleteParams parameters)
        {
            var deletable = _dbContext.Phones.FirstOrDefault(u => u.Id == parameters.Id);
            if (deletable != null)
            {
                _dbContext.Phones.Remove(deletable);
                _dbContext.SaveChanges();
            }
            return true;
        }
    }
}
