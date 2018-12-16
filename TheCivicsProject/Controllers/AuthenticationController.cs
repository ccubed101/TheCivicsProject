using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Authorization;

using TheCivicsProject.Security.Authentication;

/*
 * How Does The ASP.NET Core Authentication Middleware work?
 * 
 * Any application that uses ASP.NET Core Identity based authentication 
 * automatically has a cookie added to the client browser session whose 
 * key is ".AspNetCore.Identity.Application".
 * 
 * When a user logs in an "authentication ticket" is created and encrypted.  
 * It is then added to the HTTP reponse (as part of a header) that causes the 
 * ".AspNetCore.Identity.Application" cookie to be modified to include the 
 * "authentication ticket" at the client.  This cookie is returned to the 
 * server whenever and HTTP request is made.
 * 
 */

namespace TheCivicsProject.Controllers
{
	[Route("[controller]")]
	public class AuthenticationController : Controller
	{
		// Construction.

		/// <summary>
		/// Constructor that supplies ASP.NET Core Identity dependencies via dependency injection.
		/// </summary>
		/// <param name="userManager"></param>
		/// <param name="signInManager"></param>
		public AuthenticationController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
		{
			UserManager = userManager;
			SignInManager = signInManager;
		}


		// Property accessors.

		UserManager<ApplicationUser> UserManager { get; set; }
		SignInManager<ApplicationUser> SignInManager { get; set; }

		// Constant data.
		// TODO: Do we want to make this constants available to the client?
		const string userNamePropertyName = "UserName";
		const string passwordPropertyName = "Password";
		const string isAdminPropertyName = "IsAdmin";


		[HttpPost]
		public Task<Microsoft.AspNetCore.Identity.SignInResult> Login()
        {
			// Obtain body of HTTP request in queryable JSON form.
			JObject body = GetHttpRequestBody(HttpContext.Request);

			// If a LINQ to JSON query fails 'null' will be returned.
			// The exact strings to use to search for the desired values depend 
			// on what was sent to this controller via the body of the HTTP request.
			string username = (string)body[userNamePropertyName];
			string password = (string)body[passwordPropertyName];

			// Create instance of user to login.
			ApplicationUser applicationUser = new ApplicationUser(username);

			// Login the user.  Sign-in cookie should not persist after browser is closed.
			return SignInManager.PasswordSignInAsync(
				username, 
				password, 
				false,				// Sign -in cookie should not persist after browser is closed.
				false);             // No lockout on login failure.

		}


		[HttpPost]
		public Task Logout()
		{
			return SignInManager.SignOutAsync();
		}


		/// <summary>
		/// Register a new user.
		/// </summary>
		/// <returns></returns>
		[HttpPost]
		public Task<IdentityResult> Register()
		{
			// Obtain body of HTTP request in queryable JSON form.
			JObject body = GetHttpRequestBody(HttpContext.Request);

			// Create instance of new user.
			ApplicationUser applicationUser = new ApplicationUser();

			// If a LINQ to JSON query fails 'null' will be returned.
			// The exact strings to use to search for the desired values depend 
			// on what was sent to this controller via the body of the HTTP request.
			applicationUser.UserName = (string)body[userNamePropertyName];
			string password = (string)body[passwordPropertyName];

			// Note that if either parameter passed to method is 'null' and exception will be raised.
			return UserManager.CreateAsync(applicationUser, password);
		}


		[Authorize]
		[Authorize(Policy = "MustBeAdministrator")]
		[Authorize(Policy = "MustBeAdministrator2")]
		[HttpGet]
		public void Test()
		{
			HttpContext context = HttpContext;
		}


		// Private methods.

		/// <summary>
		/// Obtain body of HTTP request in queryable JSON form.
		/// </summary>
		/// <param name="httpRequest"></param>
		/// <returns>String representation of HTTP request body.</returns>
		private JObject GetHttpRequestBody(HttpRequest httpRequest)
		{
			// Obtain string representation of JSON from body of HTTP request.
			byte[] buffer = new byte[(int)HttpContext.Request.ContentLength];
			HttpContext.Request.Body.Read(buffer, 0, (int)HttpContext.Request.ContentLength);
			string body = Encoding.Default.GetString(buffer);

			// We use LINQ to JSON to query for desired values.
			return JObject.Parse(body);
		}
	}
}
