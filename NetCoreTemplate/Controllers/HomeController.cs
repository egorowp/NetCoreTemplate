using Microsoft.AspNetCore.Mvc;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.Web.Controllers
{
    public class HomeController : Controller
    {
        private IPhoneService _phoneService;

        public HomeController(IPhoneService phoneService)
        {
            _phoneService = phoneService;

        }

        public IActionResult Index()
        {
            _phoneService.AddNew("Test", "Cmp", 1);
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
