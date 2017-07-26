using System.Collections.Generic;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Business.Contracts.Managers
{
    public interface IAddressManager
    {
        IEnumerable<AddressGridViewModel> GetAll();

        AddressViewModel Save(SaveAddressParams parameters);

        bool Delete(IdParams parameters);

        AddressViewModel Get(IdParams parameters);
    }
}