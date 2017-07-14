using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Business.Contracts.Managers;
using NetCoreTemplate.Domain.Parameters;
using Newtonsoft.Json;

namespace NetCoreTemplate.Web.Api
{
    [Route("api/[controller]")]
    public class PhonesController : Controller
    {
        private readonly IPhoneManager _phoneManager;
        public PhonesController(IPhoneManager phoneManager)
        {
            _phoneManager = phoneManager;
        }

        [HttpPost("[action]")]
        public ActionResult Index()
        {
            var phones = _phoneManager.GetAll();
            return Content(JsonConvert.SerializeObject(phones));
        }

        [HttpPost("[action]")]
        public ActionResult Get([FromBody] IdParams parameters)
        {
            var phone = _phoneManager.Get(parameters);
            return Content(JsonConvert.SerializeObject(phone));
        }

        [HttpPost("[action]")]
        public ActionResult Save([FromBody] SavePhoneParams parameters)
        {
            var phone = _phoneManager.Save(parameters);
            return Content(JsonConvert.SerializeObject(phone));
        }

        [HttpPost("[action]")]
        public ActionResult Delete([FromBody] IdParams parameters)
        {
            _phoneManager.Delete(parameters);
            return Content(JsonConvert.SerializeObject(true));
        }
    }
}
