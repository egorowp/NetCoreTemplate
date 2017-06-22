using System;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Domain.Contracts
{
    public interface IPhoneRepository
    {
        Guid AddNew(string name, string company, int price);

        PhoneViewModel[] GetAll();

        PhoneViewModel Save(SavePhoneParams parameters);

        bool Delete(DeleteParams parameters);
    }
}