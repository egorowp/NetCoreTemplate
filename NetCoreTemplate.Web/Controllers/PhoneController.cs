﻿using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Business.Contracts;
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
        
        public ActionResult Index()
        {
            var phone = _phoneService.GetAll();
            return Content(JsonConvert.SerializeObject(phone));
        }
        
        public ActionResult Save([FromBody] SavePhoneParams parameters)
        {
            var phone = _phoneService.Save(parameters);
            return Content(JsonConvert.SerializeObject(phone));
        }
        
        public ActionResult Delete([FromBody] DeleteParams parameters)
        {
             _phoneService.Delete(parameters);
            return Json(true);
        }
    }
}
