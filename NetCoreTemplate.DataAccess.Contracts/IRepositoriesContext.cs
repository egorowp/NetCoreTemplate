namespace NetCoreTemplate.DataAccess.Contracts
{
    public interface IRepositoriesContext
    {
        IPhoneRepository PhoneRepository { get; set; }
    }
}