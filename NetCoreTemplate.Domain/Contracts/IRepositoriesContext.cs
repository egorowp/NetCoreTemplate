using NetCoreTemplate.Domain.Contracts.Repositories;

namespace NetCoreTemplate.Domain.Contracts
{
    public interface IRepositoriesContext
    {
        IPhoneRepository PhoneRepository { get; set; }
    }
}