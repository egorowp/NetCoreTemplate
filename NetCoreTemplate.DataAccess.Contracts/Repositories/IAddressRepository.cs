using System.Collections.Generic;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.DataAccess.Contracts.Repositories
{
    public interface IAddressRepository
    {
        IEnumerable<AddressGridViewModel> GetAddresses();

        AddressViewModel Save(SaveAddressParams parameters);

        bool Delete(IdParams parameters);

        AddressViewModel Get(IdParams parameters);
    }
}