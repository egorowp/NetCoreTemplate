using NetCoreTemplate.Domain.Contracts;
using NetCoreTemplate.Domain.Contracts.Repositories;

namespace NetCoreTemplate.DataAccess.Repositories
{
    public class RepositoryContext : IRepositoriesContext
    {
        public IPhoneRepository PhoneRepository { get; set; }

        public RepositoryContext(IPhoneRepository phoneRepository)
        {
            PhoneRepository = phoneRepository;
        }
    }
}