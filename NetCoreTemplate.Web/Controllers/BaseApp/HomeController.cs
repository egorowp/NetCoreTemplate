using Microsoft.AspNetCore.Mvc;

namespace NetCoreTemplate.Web.Controllers.BaseApp
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
