using System.Text.Json.Serialization;

namespace Machines.Models
{
    public class Machine
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Company { get; set; }
        public string Type { get; set; } // "Cosechadora" o "Pulverizadora"
        public bool Moving { get; set; }

        // Machine data Clima
        public string Temperatura { get; set; }
        public string Humedad { get; set; }
        public string DireccionViento { get; set; }
        public string VelocidadViento { get; set; }

        // Machine data General
        public string BateriaInterna { get; set; }
        public string BateriaVehiculo { get; set; }
        public string Ancho { get; set; }

        // Machine data Operaciones
        public string Velocidad { get; set; }
        public string Presion { get; set; }
        public string ProductoPorHectarea { get; set; }

        // Cosechadora specific properties
        public double? HumedadGrano { get; set; }
        public double? RindeHumedo { get; set; }
        public double? RindeSeco { get; set; }
        public string? Cultivo { get; set; }

        // Pulverizadora specific properties
        public double? Taponamiento { get; set; }
        public double? Evaporacion { get; set; }
        public double? Deriva { get; set; }
        public double? Calidad { get; set; }
    }
}
