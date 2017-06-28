using Newtonsoft.Json;

namespace NetCoreTemplate.Domain
{
    public class Serializable
    {
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}