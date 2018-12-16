using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheCivicsProject.Data.Models
{
    public class Group
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public List<Member> Members { get; set; }
    }
}
