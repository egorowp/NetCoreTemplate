using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Business.Contracts.Managers;
using NetCoreTemplate.Domain.Parameters;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Web.Controllers.BaseApp.Api
{
    [Route("api/[controller]")]
    public class AddressesController : Controller
    {
        private readonly IAddressManager _addressManager;
        private readonly IPhoneManager _phoneManager;

        public AddressesController(IAddressManager addressManager, IPhoneManager phoneManager)
        {
            _addressManager = addressManager;
            _phoneManager = phoneManager;
        }

        [HttpPost("[action]")]
        public IEnumerable<AddressGridViewModel> GetAll()
        {
            var addresses = _addressManager.GetAll();
            return addresses;
        }

        [HttpPost("[action]")]
        public AddressViewModel Get([FromBody] IdParams parameters)
        {
            var addressViewModel = _addressManager.Get(parameters);
            return addressViewModel;
        }

        [HttpPost("[action]")]
        public AddressViewModel Save([FromBody] SaveAddressParams parameters)
        {
            var phone = _addressManager.Save(parameters);
            return phone;
        }

        [HttpPost("[action]")]
        public bool Delete([FromBody] IdParams parameters)
        {
            _addressManager.Delete(parameters);
            return true;
        }
    }
}
