using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Domain.Contracts.Services;
using NetCoreTemplate.Domain.Parameters;
using Newtonsoft.Json;

namespace NetCoreTemplate.Web.Controllers
{
    public class PhoneController : Controller
    {
        private readonly IPhoneService _phoneService;

        public PhoneController(IPhoneService phoneService)
        {
            _phoneService = phoneService;
        }
        
        [HttpGet]
        public ActionResult Index()
        {
            var phone = _phoneService.GetAll();
            return Content(JsonConvert.SerializeObject(phone));
        }
        
        [HttpPost]
        public ActionResult Save([FromBody] SavePhoneParams parameters)
        {
            var phone = _phoneService.Save(parameters);
            return Content(JsonConvert.SerializeObject(phone));
        }
        
        [HttpPost]
        public ActionResult Delete([FromBody] DeleteParams parameters)
        {
             _phoneService.Delete(parameters);
            return Json(true);
        }
    }
}
