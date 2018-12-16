using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace TheCivicsProject.Security.Authentication
{
	public static class AuthenticationStartupService
	{
		public static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
		{
			// Added for authentication support.
			services.AddDbContext<SecurityDbContext>(
				options => options
					.UseSqlServer(configuration.GetConnectionString("SecurityConnection"))
			);
			services.AddDefaultIdentity<ApplicationUser>(/*options =>
				{
					options.SignIn.RequireConfirmedEmail = false;
					options.Stores.ProtectPersonalData = true;
				}*/

			// IdentityOptions contains all the following types.  
			// System.Action<IdentityOptions> can be passed to the AddDefaultIdentity method above.
			//IdentityOptions identityOptions = new IdentityOptions();
			//ClaimsIdentityOptions claimsIdentityOptions = new ClaimsIdentityOptions();
			//UserOptions userOptions = new UserOptions();
			//SignInOptions signInOptions = new SignInOptions();
			//TokenOptions tokenOptions = new TokenOptions();
			//StoreOptions storeOptions = new StoreOptions();
			//PasswordOptions PasswordOptions = new PasswordOptions();
			//LockoutOptions LockoutOptions = new LockoutOptions();

			)
			.AddEntityFrameworkStores<SecurityDbContext>();

		}

		public static void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			CookiePolicyOptions options =
				new CookiePolicyOptions();
			app.UseCookiePolicy();              // Added for authentication support.
			app.UseAuthentication();            // Added for authentication support.
		}
	}
}
