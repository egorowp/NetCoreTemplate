﻿using System.Collections.Generic;
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

        public AddressesController(IAddressManager addressManager, IPhoneManager phoneManager)
        {
            _addressManager = addressManager;
        }

        [HttpPost("[action]")]
        public IEnumerable<AddressGridViewModel> GetAll()
        {
            var addresses = _addressManager.GetAll();
            return addresses;
        }


        [HttpPost("[action]")]
        public int GetCount()
        {
            return _addressManager.GetCount();
        }

        [HttpPost("[action]")]
        public IEnumerable<AddressGridViewModel> GetPage([FromBody] PagerParams parameters)
        {
            var data = _addressManager.GetPage(parameters);

            return data;
        }


        [HttpPost("[action]")]
        public AddressFormViewModel Get([FromBody] IdParams parameters)
        {
            var addressViewModel = _addressManager.Get(parameters);
            return addressViewModel;
        }

        [HttpPost("[action]")]
        public AddressFormViewModel Save([FromBody] SaveAddressParams parameters)
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
