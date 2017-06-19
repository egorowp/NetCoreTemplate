using System;

namespace NetCoreTemplate.Domain.Contracts
{
    public interface IPhoneService
    {
        Guid AddNew(string name, string company, int price);
    }
}