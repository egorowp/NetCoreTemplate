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
        private readonly IRepositoriesContext _repositoriesContext;

        public PhoneService(IRepositoriesContext repositoriesContext)
        {
            _repositoriesContext = repositoriesContext;
        }

        public Guid AddNew(string name, string company, int price)
        {
            return _repositoriesContext.PhoneRepository.AddNew(name, company, price);
        }

        public PhoneViewModel[] GetAll()
        {
            return _repositoriesContext.PhoneRepository.GetAll();
        }

        public PhoneViewModel Save(SavePhoneParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Save(parameters);
        }

        public bool Delete(DeleteParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Delete(parameters);
        }
    }
}
