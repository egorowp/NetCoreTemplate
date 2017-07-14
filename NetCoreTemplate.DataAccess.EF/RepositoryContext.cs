using NetCoreTemplate.DataAccess.Contracts;
using NetCoreTemplate.DataAccess.Contracts.Repositories;

namespace NetCoreTemplate.DataAccess.EF
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