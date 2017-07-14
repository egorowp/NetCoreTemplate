using System.Collections.Generic;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.DataAccess.Contracts.Repositories
{
    public interface IPhoneRepository
    {
        IEnumerable<PhoneViewModel> GetPhones();

        PhoneViewModel Save(SavePhoneParams parameters);

        bool Delete(IdParams parameters);

        PhoneViewModel Get(IdParams parameters);
    }
}