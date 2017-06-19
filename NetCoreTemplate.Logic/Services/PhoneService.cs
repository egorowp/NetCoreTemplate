using NetCoreTemplate.Domain.Contracts;
using System;
using NetCoreTemplate.DataAccess;
using NetCoreTemplate.Domain.Models;

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
    }
}
