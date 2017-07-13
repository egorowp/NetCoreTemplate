using System;
using System.Linq;
using NetCoreTemplate.DataAccess.Contracts;
using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Domain.Models;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.DataAccess.EF.Repositories
{
    public class PhoneRepository : BaseRepository<Phone>, IPhoneRepository
    {
        private readonly DatabaseContext _dbContext;
        private readonly ILoggerProvider _loggerProvider;

        public PhoneRepository(DatabaseContext databaseContext, ILoggerProvider loggerProvider) : base(databaseContext, loggerProvider)
        {
            _dbContext = databaseContext;
            _loggerProvider = loggerProvider;
        }

        public Guid AddNew(string name, string company, int price)
        {
            var phone = _dbContext.Phones.Add(new Phone()
            {
                Company = company,
                Name = name,
                Price = price
            });
            SaveChanges();

            return phone.Entity.Id;
        }

        public new PhoneViewModel[] GetAll()
        {
            var result = base.GetAll().Select(p => new PhoneViewModel
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
            SaveChanges();

            return new PhoneViewModel(phone);
        }

        public bool Delete(DeleteParams parameters)
        {
            var deletable = _dbContext.Phones.FirstOrDefault(u => u.Id == parameters.Id);
            if (deletable != null)
            {
                _dbContext.Phones.Remove(deletable);
                SaveChanges();
            }
            return true;
        }

        public PhoneViewModel Get(GetParams parameters)
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