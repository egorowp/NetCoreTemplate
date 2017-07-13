using System;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Business.Contracts
{
    public interface IPhoneService
    {
        Guid AddNew(string name, string company, int price);

        PhoneViewModel[] GetAll();

        PhoneViewModel Save(SavePhoneParams parameters);

        bool Delete(DeleteParams parameters);

        PhoneViewModel Get(GetParams parameters);
    }
}