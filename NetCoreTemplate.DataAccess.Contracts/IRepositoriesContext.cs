using NetCoreTemplate.DataAccess.Contracts.Repositories;

namespace NetCoreTemplate.DataAccess.Contracts
{
    public interface IRepositoriesContext
    {
        IPhoneRepository PhoneRepository { get; set; }
    }
}