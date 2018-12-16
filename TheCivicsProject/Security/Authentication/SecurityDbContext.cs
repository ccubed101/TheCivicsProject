using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TheCivicsProject.Security.Authentication
{

    public class SecurityDbContext : IdentityDbContext<ApplicationUser>
    {
		// Construction.

		public SecurityDbContext(DbContextOptions<SecurityDbContext> options) : base(options) { }

		// THIS IS IMPORTANT!  If you don't add this DbSet property the database will not be modified.
		// (Any additional properties defined in the ApplicationUser class will become columns in the
		// AspNetUser table.)
		DbSet<ApplicationUser> ApplicationUsers { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			// Modifications to the database can be made here.  Also if a table is added
			// to the database then relationships can be added to the model here.
		}
    }
}
