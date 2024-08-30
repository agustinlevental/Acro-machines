using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class indicators : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "Value",
                table: "Indicators");

            migrationBuilder.AddColumn<double>(
                name: "Calidad",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cultivo",
                table: "Indicators",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Deriva",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Evaporacion",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "HumedadGrano",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "RindeHumedo",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "RindeSeco",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Taponamiento",
                table: "Indicators",
                type: "float",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Machines",
                columns: new[] { "Id", "Company", "Description", "Moving", "Type" },
                values: new object[,]
                {
                    { 1, "FarmCo", "Harvesting Machine A", true, "Cosechadora" },
                    { 2, "AgriTech", "Pulverizing Machine B", false, "Pulverizadora" }
                });

            migrationBuilder.InsertData(
                table: "Indicators",
                columns: new[] { "Id", "Calidad", "Cultivo", "Deriva", "Evaporacion", "HumedadGrano", "MachineDataId", "MachineId", "RindeHumedo", "RindeSeco", "Taponamiento" },
                values: new object[,]
                {
                    { 1, null, "Trigo", null, null, 12.5, null, 1, 350.0, 300.0, null },
                    { 2, 95.0, null, 1.2, 2.5, null, null, 2, null, null, 5.0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Indicators",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Indicators",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "Calidad",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "Cultivo",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "Deriva",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "Evaporacion",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "HumedadGrano",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "RindeHumedo",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "RindeSeco",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "Taponamiento",
                table: "Indicators");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Indicators",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Value",
                table: "Indicators",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
