using Microsoft.EntityFrameworkCore;
using Machines.Models;

public class MachineContext : DbContext
{
    public DbSet<Machine> Machines { get; set; }

    public MachineContext(DbContextOptions<MachineContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Machine>().ToTable("Machines");

        // Datos de ejemplo
        modelBuilder.Entity<Machine>().HasData(
           
            new Machine
            {
                Id = 1,
                Description = "Claas Lexion 8800",
                Company = "Empresa A",
                Type = "Cosechadora",
                Moving = true,
                Temperatura = "22°C",
                Humedad = "50%",
                DireccionViento = "Noreste",
                VelocidadViento = "10 km/h",
                BateriaInterna = "80%",
                BateriaVehiculo = "90%",
                Ancho = "3.5m",
                Velocidad = "10 km/h",
                Presion = "2.5 bar",
                ProductoPorHectarea = "100 kg/ha",
                HumedadGrano = 1,
                RindeHumedo = 8.3,
                RindeSeco = 7.0,
                Cultivo = "Trigo"
            },
            new Machine
            {
                Id = 3,
                Description = "New Holland CR10.90",
                Company = "Empresa C",
                Type = "Cosechadora",
                Moving = true,
                Temperatura = "20°C",
                Humedad = "55%",
                DireccionViento = "Sureste",
                VelocidadViento = "12 km/h",
                BateriaInterna = "85%",
                BateriaVehiculo = "95%",
                Ancho = "4.5m",
                Velocidad = "15 km/h",
                Presion = "3.5 bar",
                ProductoPorHectarea = "120 kg/ha",
                HumedadGrano = 4,
                RindeHumedo = 10.0,
                RindeSeco = 8.0,
                Cultivo = "Soja"
            },
            new Machine
            {
                Id = 5,
                Description = "Fendt Ideal 9",
                Company = "Empresa E",
                Type = "Cosechadora",
                Moving = false,
                Temperatura = "24°C",
                Humedad = "65%",
                DireccionViento = "Sur",
                VelocidadViento = "14 km/h",
                BateriaInterna = "77%",
                BateriaVehiculo = "83%",
                Ancho = "3.8m",
                Velocidad = "11 km/h",
                Presion = "2.8 bar",
                ProductoPorHectarea = "110 kg/ha",
                HumedadGrano = 3,
                RindeHumedo = 9.2,
                RindeSeco = 7.8,
                Cultivo = "Avena"
            },
            new Machine
            {
                Id = 7,
                Description = "Case IH Axial-Flow 9250",
                Company = "Empresa G",
                Type = "Cosechadora",
                Moving = true,
                Temperatura = "23°C",
                Humedad = "60%",
                DireccionViento = "Oeste",
                VelocidadViento = "13 km/h",
                BateriaInterna = "82%",
                BateriaVehiculo = "88%",
                Ancho = "4.0m",
                Velocidad = "12 km/h",
                Presion = "3.2 bar",
                ProductoPorHectarea = "105 kg/ha",
                HumedadGrano = 12.9,
                RindeHumedo = 8.7,
                RindeSeco = 7.3,
                Cultivo = "Cebada"
            },
            new Machine
            {
                Id = 9,
                Description = "John Deere X9 1000",
                Company = "Empresa I",
                Type = "Cosechadora",
                Moving = false,
                Temperatura = "26°C",
                Humedad = "50%",
                DireccionViento = "Noroeste",
                VelocidadViento = "11 km/h",
                BateriaInterna = "90%",
                BateriaVehiculo = "80%",
                Ancho = "4.2m",
                Velocidad = "13 km/h",
                Presion = "3.0 bar",
                ProductoPorHectarea = "115 kg/ha",
                HumedadGrano = 7,
                RindeHumedo = 9.5,
                RindeSeco = 7.6,
                Cultivo = "Maíz"
            },
            new Machine
            {
                Id = 11,
                Description = "John Deere S790",
                Company = "Empresa K",
                Type = "Cosechadora",
                Moving = true,
                Temperatura = "21°C",
                Humedad = "53%",
                DireccionViento = "Noreste",
                VelocidadViento = "10 km/h",
                BateriaInterna = "85%",
                BateriaVehiculo = "92%",
                Ancho = "3.7m",
                Velocidad = "11 km/h",
                Presion = "2.7 bar",
                ProductoPorHectarea = "100 kg/ha",
                HumedadGrano = 1,
                RindeHumedo = 8.0,
                RindeSeco = 7.2,
                Cultivo = "Trigo"
            },
          
            new Machine
            {
                Id = 2,
                Description = "John Deere ",
                Company = "Empresa E",
                Type = "Pulverizadora",
                Moving = false,
                Temperatura = "30°C",
                Humedad = "45%",
                DireccionViento = "Este",
                VelocidadViento = "5 km/h",
                BateriaInterna = "88%",
                BateriaVehiculo = "80%",
                Ancho = "7.0m",
                Velocidad = "25 km/h",
                Presion = "2.0 bar",
                ProductoPorHectarea = "160 kg/ha",
                Taponamiento = 0,
                Evaporacion = 4.8,
                Deriva = 0,
                Calidad = 90
            },
            new Machine
            {
                Id = 4,
                Description = "Case IH",
                Company = "Empresa D",
                Type = "Pulverizadora",
                Moving = true,
                Temperatura = "28°C",
                Humedad = "40%",
                DireccionViento = "Noroeste",
                VelocidadViento = "8 km/h",
                BateriaInterna = "90%",
                BateriaVehiculo = "85%",
                Ancho = "6.0m",
                Velocidad = "20 km/h",
                Presion = "1.8 bar",
                ProductoPorHectarea = "150 kg/ha",
                Taponamiento = 2,
                Evaporacion = 5.0,
                Deriva = 1,
                Calidad = 85
            },
            new Machine
            {
                Id = 6,
                Description = "New Holland",
                Company = "Empresa F",
                Type = "Pulverizadora",
                Moving = true,
                Temperatura = "26°C",
                Humedad = "50%",
                DireccionViento = "Sur",
                VelocidadViento = "6 km/h",
                BateriaInterna = "92%",
                BateriaVehiculo = "87%",
                Ancho = "8.0m",
                Velocidad = "30 km/h",
                Presion = "2.2 bar",
                ProductoPorHectarea = "170 kg/ha",
                Taponamiento = 1.0,
                Evaporacion = 4.5,
                Deriva = 2.3,
                Calidad = 95
            },
            new Machine
            {
                Id = 8,
                Description = "AMAZONE",
                Company = "Empresa G",
                Type = "Pulverizadora",
                Moving = false,
                Temperatura = "27°C",
                Humedad = "48%",
                DireccionViento = "Suroeste",
                VelocidadViento = "7 km/h",
                BateriaInterna = "87%",
                BateriaVehiculo = "84%",
                Ancho = "6.5m",
                Velocidad = "22 km/h",
                Presion = "1.9 bar",
                ProductoPorHectarea = "155 kg/ha",
                Taponamiento = 5,
                Evaporacion = 4.6,
                Deriva = 4,
                Calidad = 88
            },
            new Machine
            {
                Id = 10,
                Description = "Jacto",
                Company = "Empresa H",
                Type = "Pulverizadora",
                Moving = true,
                Temperatura = "29°C",
                Humedad = "42%",
                DireccionViento = "Oeste",
                VelocidadViento = "6 km/h",
                BateriaInterna = "85%",
                BateriaVehiculo = "80%",
                Ancho = "7.5m",
                Velocidad = "24 km/h",
                Presion = "2.1 bar",
                ProductoPorHectarea = "165 kg/ha",
                Taponamiento = 4,
                Evaporacion = 4.7,
                Deriva = 6,
                Calidad = 90
            },
            new Machine
            {
                Id = 12,
                Description = "Bucher",
                Company = "Empresa J",
                Type = "Pulverizadora",
                Moving = false,
                Temperatura = "25°C",
                Humedad = "55%",
                DireccionViento = "Norte",
                VelocidadViento = "5 km/h",
                BateriaInterna = "88%",
                BateriaVehiculo = "82%",
                Ancho = "6.8m",
                Velocidad = "23 km/h",
                Presion = "2.3 bar",
                ProductoPorHectarea = "160 kg/ha",
                Taponamiento = 1.6,
                Evaporacion = 4.9,
                Deriva = 3,
                Calidad = 89
            }
        );
    }
}
