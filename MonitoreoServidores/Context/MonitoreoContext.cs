using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using MonitoreoServidores.Models;

namespace MonitoreoServidores.Context
{
    public class MonitoreoContext : DbContext
    {

        public MonitoreoContext() : base("DefaultConnection")
        {
        }

        public DbSet<Servidor> Servidores { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}