using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Business.Contracts;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NetCoreTemplate.Web.Api
{
    [Route("api/[controller]")]
    public class PhonesController : Controller
    {
        private readonly IPhoneService _phoneService;
        public PhonesController(IPhoneService phoneService)
        {
            _phoneService = phoneService;
        }
        [HttpPost("index")]
        public ActionResult Index()
        {
            var phones = _phoneService.GetAll();
            return Content(JsonConvert.SerializeObject(phones));

        }
        [HttpPost("get")]
        public ActionResult Get([FromBody] GetParams parameters)
        {
            var phone = _phoneService.Get(parameters);
            return Content(JsonConvert.SerializeObject(phone));

        }

        [HttpPost("save")]
        public ActionResult Save([FromBody] SavePhoneParams parameters)
        {
            var phone = _phoneService.Save(parameters);
            return Content(JsonConvert.SerializeObject(phone));
        }

        [HttpPost("delete")]
        public ActionResult Delete([FromBody] DeleteParams parameters)
        {
            _phoneService.Delete(parameters);
            return Content(JsonConvert.SerializeObject(true));
        }
    }
}
