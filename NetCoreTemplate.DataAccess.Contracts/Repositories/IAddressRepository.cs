using System.Collections.Generic;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.DataAccess.Contracts.Repositories
{
    public interface IAddressRepository
    {
        IEnumerable<AddressGridViewModel> GetAddresses();

        AddressFormViewModel Save(SaveAddressParams parameters);

        bool Delete(IdParams parameters);

        AddressFormViewModel Get(IdParams parameters);

        IEnumerable<AddressGridViewModel> GetPage(PagerParams parameters);

        int GetCount();
    }
}