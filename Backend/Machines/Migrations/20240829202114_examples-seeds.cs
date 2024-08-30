using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class examplesseeds : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "Description", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[] { "7.0m", "88%", "80%", 90.0, "Empresa E", null, 2.7000000000000002, "Pulverizadora B", "Este", 4.7999999999999998, "45%", null, "2.0 bar", "160 kg/ha", null, null, 1.5, "30°C", "Pulverizadora", "25 km/h", "5 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 4,
                column: "Calidad",
                value: 85.0);

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Cultivo", "Deriva", "Description", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[] { "3.8m", "77%", "83%", null, "Avena", null, "Cosechadora E", "Sur", null, "65%", 13.800000000000001, "2.8 bar", "110 kg/ha", 9.1999999999999993, 7.7999999999999998, null, "24°C", "Cosechadora", "11 km/h", "14 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 6,
                column: "Calidad",
                value: 95.0);

            migrationBuilder.InsertData(
                table: "Machines",
                columns: new[] { "Id", "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "Description", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Moving", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[,]
                {
                    { 7, "4.0m", "82%", "88%", null, "Empresa G", "Cebada", null, "Cosechadora G", "Oeste", null, "60%", 12.9, true, "3.2 bar", "105 kg/ha", 8.6999999999999993, 7.2999999999999998, null, "23°C", "Cosechadora", "12 km/h", "13 km/h" },
                    { 8, "6.5m", "87%", "84%", 88.0, "Empresa G", null, 2.6000000000000001, "Pulverizadora D", "Suroeste", 4.5999999999999996, "48%", null, false, "1.9 bar", "155 kg/ha", null, null, 1.3, "27°C", "Pulverizadora", "22 km/h", "7 km/h" },
                    { 9, "4.2m", "90%", "80%", null, "Empresa I", "Maíz", null, "Cosechadora I", "Noroeste", null, "50%", 14.0, false, "3.0 bar", "115 kg/ha", 9.5, 7.5999999999999996, null, "26°C", "Cosechadora", "13 km/h", "11 km/h" },
                    { 10, "7.5m", "85%", "80%", 90.0, "Empresa H", null, 2.3999999999999999, "Pulverizadora E", "Oeste", 4.7000000000000002, "42%", null, true, "2.1 bar", "165 kg/ha", null, null, 1.3999999999999999, "29°C", "Pulverizadora", "24 km/h", "6 km/h" },
                    { 11, "3.7m", "85%", "92%", null, "Empresa K", "Trigo", null, "Cosechadora K", "Noreste", null, "53%", 12.199999999999999, true, "2.7 bar", "100 kg/ha", 8.0, 7.2000000000000002, null, "21°C", "Cosechadora", "11 km/h", "10 km/h" },
                    { 12, "6.8m", "88%", "82%", 89.0, "Empresa J", null, 2.5, "Pulverizadora F", "Norte", 4.9000000000000004, "55%", null, false, "2.3 bar", "160 kg/ha", null, null, 1.6000000000000001, "25°C", "Pulverizadora", "23 km/h", "5 km/h" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "Description", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[] { "4.0m", "75%", "85%", null, "Empresa B", "Maíz", null, "Cosechadora B", "Oeste", null, "60%", 13.0, "3.0 bar", "110 kg/ha", 9.0, 7.5, null, "25°C", "Cosechadora", "12 km/h", "15 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 4,
                column: "Calidad",
                value: 8.5);

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Cultivo", "Deriva", "Description", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[] { "7.0m", "88%", "80%", 9.0, null, 2.7000000000000002, "Pulverizadora B", "Este", 4.7999999999999998, "45%", null, "2.0 bar", "160 kg/ha", null, null, 1.5, "30°C", "Pulverizadora", "25 km/h", "5 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 6,
                column: "Calidad",
                value: 9.5);
        }
    }
}
