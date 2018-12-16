using System;
using Microsoft.AspNetCore.Identity;

namespace TheCivicsProject.Security.Authentication
{
	public interface IApplicationUser
	{

	}

    public class ApplicationUser : IdentityUser, IApplicationUser
    {
		// Construction.

		public ApplicationUser() { }

		public ApplicationUser(string username) : base(username) { }


		// Properties that will extend the AspNetUser table.
		//public string FirstName { get; set; }
		//public string LastName { get; set; }
	}
}
