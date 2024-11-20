using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult NotFound()
        {
            Response.StatusCode = 404; // Make sure the status code is correct
            return View();
        }

        public ActionResult GeneralError()
        {
            return View();
        }
    }
}