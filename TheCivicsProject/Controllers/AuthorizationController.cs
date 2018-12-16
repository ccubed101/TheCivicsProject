using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

using TheCivicsProject.Security.Authentication;


namespace TheCivicsProject.Controllers
{
    public class AuthorizationController : Controller
	{
		// Construction.

		/// <summary>
		/// Constructor that supplies ASP.NET Core Identity dependencies via dependency injection.
		/// </summary>
		/// <param name="userManager"></param>
		/// <param name="signInManager"></param>
		public AuthorizationController(UserManager<ApplicationUser> userManager)
		{
			UserManager = userManager;
		}


		// Property accessors.

		UserManager<ApplicationUser> UserManager { get; set; }


		/// <summary>
		/// Register a new user.
		/// </summary>
		/// <returns></returns>
		[HttpPost]
		//[HttpPost("Register")]				// Don't use as the specified route will override the Angular routes specified at the client.
		public Task<IdentityResult> AddAdministratorAuthorization()
		{
			Claim claim = new Claim("IsAdmin", "true", ClaimValueTypes.Boolean);
			Task<ApplicationUser> task = UserManager.GetUserAsync(HttpContext.User);
			task.Wait();
			return UserManager.AddClaimAsync(task.Result, claim);
		}
	}
}
