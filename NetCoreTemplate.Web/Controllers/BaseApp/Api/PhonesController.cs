using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Business.Contracts.Managers;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Web.Controllers.BaseApp.Api
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
        public IEnumerable<PhoneViewModel> GetAll()
        {
            var phones = _phoneManager.GetAll();
            return phones;
        }

        [HttpPost("[action]")]
        public PhoneViewModel Get([FromBody] IdParams parameters)
        {
            var phone = _phoneManager.Get(parameters);
            return phone;
        }

        [HttpPost("[action]")]
        public PhoneViewModel Save([FromBody] SavePhoneParams parameters)
        {
            var phone = _phoneManager.Save(parameters);
            return phone;
        }

        [HttpPost("[action]")]
        public bool Delete([FromBody] IdParams parameters)
        {
            _phoneManager.Delete(parameters);
            return true;
        }
    }
}
