using System.Collections.Generic;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Business.Contracts.Managers
{
    public interface IAddressManager
    {
        IEnumerable<AddressGridViewModel> GetAll();

        AddressFormViewModel Save(SaveAddressParams parameters);

        bool Delete(IdParams parameters);

        AddressFormViewModel Get(IdParams parameters);

        IEnumerable<AddressGridViewModel> GetPage(PagerParams parameters);
    }
}