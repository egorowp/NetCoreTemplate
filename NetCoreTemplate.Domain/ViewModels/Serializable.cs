using Newtonsoft.Json;

namespace NetCoreTemplate.Domain.ViewModels
{
    public class Serializable
    {
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}