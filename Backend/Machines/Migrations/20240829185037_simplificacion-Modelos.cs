using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class simplificacionModelos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClimaData");

            migrationBuilder.DropTable(
                name: "GeneralData");

            migrationBuilder.DropTable(
                name: "Indicators");

            migrationBuilder.DropTable(
                name: "OperacionData");

            migrationBuilder.DropTable(
                name: "MachineData");

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Company",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Ancho",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "BateriaInterna",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "BateriaVehiculo",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DireccionViento",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Humedad",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Presion",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProductoPorHectarea",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Temperatura",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Velocidad",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VelocidadViento",
                table: "Machines",
                type: "nvarchar(max)",
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

            migrationBuilder.DropColumn(
                name: "Ancho",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "BateriaInterna",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "BateriaVehiculo",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "DireccionViento",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Humedad",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Presion",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "ProductoPorHectarea",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Temperatura",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Velocidad",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "VelocidadViento",
                table: "Machines");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Company",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "Indicators",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Calidad = table.Column<double>(type: "float", nullable: false),
                    Cultivo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Deriva = table.Column<double>(type: "float", nullable: false),
                    Evaporacion = table.Column<double>(type: "float", nullable: false),
                    HumedadGrano = table.Column<double>(type: "float", nullable: false),
                    MachineDataId = table.Column<int>(type: "int", nullable: true),
                    MachineId = table.Column<int>(type: "int", nullable: false),
                    RindeHumedo = table.Column<double>(type: "float", nullable: false),
                    RindeSeco = table.Column<double>(type: "float", nullable: false),
                    Taponamiento = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Indicators", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MachineData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MachineId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MachineData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MachineData_Machines_MachineId",
                        column: x => x.MachineId,
                        principalTable: "Machines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClimaData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DireccionViento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Humedad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MachineDataId = table.Column<int>(type: "int", nullable: false),
                    Temperatura = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VelocidadViento = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClimaData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClimaData_MachineData_MachineDataId",
                        column: x => x.MachineDataId,
                        principalTable: "MachineData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GeneralData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ancho = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BateriaInterna = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BateriaVehiculo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MachineDataId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GeneralData_MachineData_MachineDataId",
                        column: x => x.MachineDataId,
                        principalTable: "MachineData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OperacionData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ancho = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MachineDataId = table.Column<int>(type: "int", nullable: false),
                    Presion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductoPorHectarea = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Velocidad = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacionData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OperacionData_MachineData_MachineDataId",
                        column: x => x.MachineDataId,
                        principalTable: "MachineData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Indicators",
                columns: new[] { "Id", "Calidad", "Cultivo", "Deriva", "Evaporacion", "HumedadGrano", "MachineDataId", "MachineId", "RindeHumedo", "RindeSeco", "Taponamiento" },
                values: new object[,]
                {
                    { 1, 95.5, "Maíz", 1.0, 2.1000000000000001, 12.5, null, 1, 20.5, 18.0, 0.0 },
                    { 2, 97.0, "Trigo", 0.5, 1.8, 11.0, null, 2, 22.0, 19.5, 0.0 }
                });

            migrationBuilder.InsertData(
                table: "Machines",
                columns: new[] { "Id", "Company", "Description", "MachineType", "Moving", "Type" },
                values: new object[,]
                {
                    { 1, "FarmCo", "Harvesting Machine A", "Machine", true, "Cosechadora" },
                    { 2, "AgriTech", "Spraying Machine B", "Machine", false, "Pulverizadora" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClimaData_MachineDataId",
                table: "ClimaData",
                column: "MachineDataId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GeneralData_MachineDataId",
                table: "GeneralData",
                column: "MachineDataId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MachineData_MachineId",
                table: "MachineData",
                column: "MachineId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OperacionData_MachineDataId",
                table: "OperacionData",
                column: "MachineDataId",
                unique: true);
        }
    }
}
