//using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace flowersASPNETProject.Models
{
    public class flowersAppDbContext: DbContext
    {
        public DbSet<Flower> Flowers { get; set; }
        public flowersAppDbContext() :base("name=DefaultConnection")
        {   

        }
    }
}