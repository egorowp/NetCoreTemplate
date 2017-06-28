using NetCoreTemplate.DataAccess.Contracts;

namespace NetCoreTemplate.DataAccess.EF.Repositories
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