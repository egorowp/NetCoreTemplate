using NetCoreTemplate.Domain.Contracts;
using System;
using NetCoreTemplate.Domain.Contracts.Services;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;
using PostSharp.Patterns.Diagnostics;

namespace NetCoreTemplate.Logic.Services
{
    public class PhoneService : IPhoneService
    {
        private readonly IRepositoriesContext _repositoriesContext;

        public PhoneService(IRepositoriesContext repositoriesContext)
        {
            _repositoriesContext = repositoriesContext;
        }

        [Log]
        public Guid AddNew(string name, string company, int price)
        {
            return _repositoriesContext.PhoneRepository.AddNew(name, company, price);
        }

        [Log]
        public PhoneViewModel[] GetAll()
        {
            return _repositoriesContext.PhoneRepository.GetAll();
        }

        [Log]
        public PhoneViewModel Save(SavePhoneParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Save(parameters);
        }

        [Log]
        public bool Delete(DeleteParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Delete(parameters);
        }
    }
}
