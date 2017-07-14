using System;
using System.Collections.Generic;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Business.Contracts.Managers
{
    public interface IPhoneManager
    {
        IEnumerable<PhoneViewModel> GetAll();

        PhoneViewModel Save(SavePhoneParams parameters);

        bool Delete(IdParams parameters);

        PhoneViewModel Get(IdParams parameters);
    }
}