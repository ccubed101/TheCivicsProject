using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Claims;

namespace TheCivicsProject.Security.Authorization
{
	public static class AuthorizationStartupService
	{
		public static void ConfigureServices(IServiceCollection services)
		{
			services.AddAuthorization(
				options =>
				{
					options.AddPolicy("MustBeAdministrator", policy => policy.RequireClaim("IsAdmin", "true"));
					options.AddPolicy("MustBeAdministrator2", policy => policy.RequireAssertion(
						context =>
						{
							Claim claim = context.User.FindFirst("IsAdmin");
							if (claim != null)
								return (claim.Value == "true");
							else
								return false;
						}
					));
				}
			);
		}
	}
}
