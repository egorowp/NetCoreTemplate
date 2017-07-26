using System.Collections.Generic;
using NetCoreTemplate.Business.Contracts.Managers;
using NetCoreTemplate.DataAccess.Contracts;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Business.Managers
{
    public class AddressManager : IAddressManager
    {
        private readonly IRepositoriesContext _repositoriesContext;

        public AddressManager(IRepositoriesContext repositoriesContext)
        {
            _repositoriesContext = repositoriesContext;
        }

        public IEnumerable<AddressGridViewModel> GetAll()
        {
            return _repositoriesContext.AddressRepository.GetAddresses();
        }

        public AddressViewModel Save(SaveAddressParams parameters)
        {
            return _repositoriesContext.AddressRepository.Save(parameters);
        }

        public bool Delete(IdParams parameters)
        {
            return _repositoriesContext.AddressRepository.Delete(parameters);
        }

        public AddressViewModel Get(IdParams parameters)
        {
            return _repositoriesContext.AddressRepository.Get(parameters);
        }
    }
}
