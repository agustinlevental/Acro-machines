using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class agregandoMachineData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.AddColumn<double>(
                name: "Calidad",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cultivo",
                table: "Machines",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Deriva",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Evaporacion",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "HumedadGrano",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MachineType",
                table: "Machines",
                type: "nvarchar(13)",
                maxLength: 13,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "RindeHumedo",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "RindeSeco",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Taponamiento",
                table: "Machines",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MachineDataId",
                table: "Indicators",
                type: "int",
                nullable: true);

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
                    MachineDataId = table.Column<int>(type: "int", nullable: false),
                    Temperatura = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Humedad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DireccionViento = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    MachineDataId = table.Column<int>(type: "int", nullable: false),
                    BateriaInterna = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BateriaVehiculo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ancho = table.Column<string>(type: "nvarchar(max)", nullable: false)
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
                    MachineDataId = table.Column<int>(type: "int", nullable: false),
                    Velocidad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Presion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductoPorHectarea = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ancho = table.Column<string>(type: "nvarchar(max)", nullable: false)
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

            migrationBuilder.UpdateData(
                table: "Indicators",
                keyColumn: "Id",
                keyValue: 1,
                column: "MachineDataId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Indicators",
                keyColumn: "Id",
                keyValue: 2,
                column: "MachineDataId",
                value: null);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClimaData");

            migrationBuilder.DropTable(
                name: "GeneralData");

            migrationBuilder.DropTable(
                name: "OperacionData");

            migrationBuilder.DropTable(
                name: "MachineData");

            migrationBuilder.DropColumn(
                name: "Calidad",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Cultivo",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Deriva",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Evaporacion",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "HumedadGrano",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "MachineType",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "RindeHumedo",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "RindeSeco",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Taponamiento",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "MachineDataId",
                table: "Indicators");
        }
    }
}
