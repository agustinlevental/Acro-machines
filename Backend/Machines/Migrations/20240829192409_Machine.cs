using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class Machine : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MachineType",
                table: "Machines");

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "DireccionViento", "Evaporacion", "Humedad", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Velocidad" },
                values: new object[] { "80%", "90%", null, "Empresa A", "Trigo", null, "Noreste", null, "50%", "2.5 bar", "100 kg/ha", 8.3000000000000007, 7.0, null, "22°C", "10 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "Evaporacion", "Humedad", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Velocidad", "VelocidadViento" },
                values: new object[] { "4.0m", "75%", "85%", null, "Empresa B", "Maíz", null, null, "60%", "3.0 bar", "110 kg/ha", 9.0, 7.5, null, "25°C", "12 km/h", "15 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Deriva", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Velocidad" },
                values: new object[] { "4.5m", "85%", "95%", null, "Empresa C", null, "Sureste", null, "55%", 14.199999999999999, "3.5 bar", "120 kg/ha", 10.0, 8.0, null, "15 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Moving", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Velocidad", "VelocidadViento" },
                values: new object[] { "6.0m", "90%", "85%", 8.5, "Empresa D", null, 2.5, "Noroeste", 5.0, "40%", null, true, "1.8 bar", "150 kg/ha", null, null, 1.2, "28°C", "20 km/h", "8 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Moving", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Velocidad", "VelocidadViento" },
                values: new object[] { "7.0m", "88%", "80%", 9.0, "Empresa E", null, 2.7000000000000002, "Este", 4.7999999999999998, "45%", null, false, "2.0 bar", "160 kg/ha", null, null, 1.5, "30°C", "25 km/h", "5 km/h" });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Cultivo", "Deriva", "DireccionViento", "Evaporacion", "Humedad", "HumedadGrano", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Taponamiento", "Temperatura", "Velocidad", "VelocidadViento" },
                values: new object[] { "8.0m", "92%", "87%", 9.5, "Empresa F", null, 2.2999999999999998, "Sur", 4.5, "50%", null, "2.2 bar", "170 kg/ha", null, null, 1.0, "26°C", "30 km/h", "6 km/h" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.AddColumn<string>(
                name: "MachineType",
                table: "Machines",
                type: "nvarchar(13)",
                maxLength: 13,
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "Machines",
                columns: new[] { "Id", "Ancho", "BateriaInterna", "BateriaVehiculo", "Company", "Cultivo", "Description", "DireccionViento", "Humedad", "HumedadGrano", "MachineType", "Moving", "Presion", "ProductoPorHectarea", "RindeHumedo", "RindeSeco", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[,]
                {
                    { 1, "3.5m", "12V", "24V", "FarmCo", "Maíz", "Cosechadora A", "Norte", "60%", 12.5, "Cosechadora", true, "5 bar", "150 kg", 20.5, 18.0, "25°C", "Cosechadora", "20 km/h", "10 km/h" },
                    { 2, "3.0m", "12V", "24V", "AgriCorp", "Trigo", "Cosechadora B", "Oeste", "55%", 13.0, "Cosechadora", false, "6 bar", "100 kg", 22.0, 19.5, "22°C", "Cosechadora", "25 km/h", "8 km/h" },
                    { 3, "3.8m", "12V", "24V", "HarvestMax", "Soja", "Cosechadora C", "Sur", "50%", 11.800000000000001, "Cosechadora", true, "5.5 bar", "140 kg", 21.0, 18.800000000000001, "20°C", "Cosechadora", "22 km/h", "12 km/h" }
                });

            migrationBuilder.InsertData(
                table: "Machines",
                columns: new[] { "Id", "Ancho", "BateriaInterna", "BateriaVehiculo", "Calidad", "Company", "Deriva", "Description", "DireccionViento", "Evaporacion", "Humedad", "MachineType", "Moving", "Presion", "ProductoPorHectarea", "Taponamiento", "Temperatura", "Type", "Velocidad", "VelocidadViento" },
                values: new object[,]
                {
                    { 4, "3.2m", "12V", "24V", 95.0, "AgriTech", 0.69999999999999996, "Pulverizadora A", "Este", 1.2, "58%", "Pulverizadora", false, "4.5 bar", "120 kg", 0.5, "24°C", "Pulverizadora", "18 km/h", "15 km/h" },
                    { 5, "3.5m", "12V", "24V", 96.0, "SprayMaster", 0.40000000000000002, "Pulverizadora B", "Noroeste", 1.5, "62%", "Pulverizadora", true, "4.8 bar", "130 kg", 0.20000000000000001, "26°C", "Pulverizadora", "19 km/h", "9 km/h" },
                    { 6, "3.1m", "12V", "24V", 94.0, "FieldSpray", 0.59999999999999998, "Pulverizadora C", "Sureste", 1.0, "57%", "Pulverizadora", true, "5.0 bar", "140 kg", 0.29999999999999999, "23°C", "Pulverizadora", "20 km/h", "12 km/h" }
                });
        }
    }
}
