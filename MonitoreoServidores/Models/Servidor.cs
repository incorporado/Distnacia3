using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MonitoreoServidores.Models
{
    public class Servidor
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string URL { get; set; }
        public float Latitud { get; set; }
        public float Longitud { get; set; }

    }
}