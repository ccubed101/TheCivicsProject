using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using TheCivicsProject.Data.Models;

namespace TheCivicsProject.Data
{

    public class DataDbContext : DbContext
    {
        // Construction.

        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options)
        {

        }

        public DbSet<Group> Groups { get; set; }
        public DbSet<Member> Members { get; set; }
    }
}
