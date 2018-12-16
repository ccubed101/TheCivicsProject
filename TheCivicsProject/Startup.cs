using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;

using TheCivicsProject.Security.Authentication;
using TheCivicsProject.Security.Authorization;
using TheCivicsProject.Data;

namespace TheCivicsProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            // For primary database.
            services.AddDbContext<DataDbContext>(
                options => options
                    .UseSqlServer(Configuration.GetConnectionString("DataConnection"))
            );

			AuthenticationStartupService.ConfigureServices(services, Configuration);

			services.ConfigureApplicationCookie(
				options =>
				{
					//options.AccessDeniedPath = "/MyLogin";
					//options.LoginPath = "/MyLogin";
					//options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
					//options.SlidingExpiration = true;
				}
			);

			AuthorizationStartupService.ConfigureServices(services);
		}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

			AuthenticationStartupService.Configure(app, env);

            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
				// Note that the attributes applied to controller classes (e.g. Route("[<a route>]")
				// and the controller class method (e.g. HttpGet([<a partial route>'") will take 
				// precedence of the routes defined here.  In other words routes can be defined in 
				// the controller classes themselves using attributes and they take precedence.
				routes.MapRoute(
					name: "default",
					template: "{controller}/{action=Index}/{id?}");
			});

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    // From https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-2.1&tabs=netcore-cli#server-side-rendering
                    // Around 10 seconds is required to start the Angular CLI server when you try and run your app from within VS.  
                    // If you want to avoid this delay then comment out the line below and comment in the line below that.  Then 
                    // manually start the Angular CLI server from a command prompt within the "ClientApp" directory using "npm start".
                    // Then when you run your app from within VS you can simply leave the browser running (no need to stop it) and
                    // then modify the client app's file as desired and saving the modifications when you want to see them rendered.
                    //spa.UseAngularCliServer(npmScript: "start");
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });
        }
    }
}
