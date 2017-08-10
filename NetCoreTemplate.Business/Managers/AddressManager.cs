using System.Collections.Generic;
using System.Linq;
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

        public AddressFormViewModel Save(SaveAddressParams parameters)
        {
            return _repositoriesContext.AddressRepository.Save(parameters);
        }

        public bool Delete(IdParams parameters)
        {
            return _repositoriesContext.AddressRepository.Delete(parameters);
        }

        public AddressFormViewModel Get(IdParams parameters)
        {
            var result = _repositoriesContext.AddressRepository.Get(parameters);
            result.Phones = _repositoriesContext.PhoneRepository.GetPhones()
                .Select(p => new PhoneLookupViewModel() {Id = p.Id, Name = p.Name});
            return result;
        }

        public IEnumerable<AddressGridViewModel> GetPage(PagerParams parameters)
        {
            return _repositoriesContext.AddressRepository.GetPage(parameters);
        }

        public int GetCount()
        {
            return _repositoriesContext.AddressRepository.GetCount();
        }
    }
}
