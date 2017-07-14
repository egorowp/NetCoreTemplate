using Microsoft.AspNetCore.Mvc;

namespace NetCoreTemplate.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
