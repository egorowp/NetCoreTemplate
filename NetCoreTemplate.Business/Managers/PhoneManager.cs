using System;
using System.Collections.Generic;
using NetCoreTemplate.Business.Contracts.Managers;
using NetCoreTemplate.DataAccess.Contracts;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;
using PostSharp.Patterns.Diagnostics;

namespace NetCoreTemplate.Business.Managers
{
    public class PhoneManager : IPhoneManager
    {
        private readonly IRepositoriesContext _repositoriesContext;

        public PhoneManager(IRepositoriesContext repositoriesContext)
        {
            _repositoriesContext = repositoriesContext;
        }

        [Log]
        public IEnumerable<PhoneViewModel> GetAll()
        {
            return _repositoriesContext.PhoneRepository.GetPhones();
        }

        [Log]
        public PhoneViewModel Save(SavePhoneParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Save(parameters);
        }

        [Log]
        public bool Delete(IdParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Delete(parameters);
        }

        [Log]
        public PhoneViewModel Get(IdParams parameters)
        {
            return _repositoriesContext.PhoneRepository.Get(parameters);
        }
    }
}
