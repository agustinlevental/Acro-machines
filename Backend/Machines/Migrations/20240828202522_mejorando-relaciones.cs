using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class mejorandorelaciones : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Indicators_MachineData_MachineDataId",
                table: "Indicators");

            migrationBuilder.DropIndex(
                name: "IX_MachineData_MachineId",
                table: "MachineData");

            migrationBuilder.DropIndex(
                name: "IX_Indicators_MachineDataId",
                table: "Indicators");

            migrationBuilder.DropColumn(
                name: "MachineDataId",
                table: "Indicators");

            migrationBuilder.CreateIndex(
                name: "IX_MachineData_MachineId",
                table: "MachineData",
                column: "MachineId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_MachineData_MachineId",
                table: "MachineData");

            migrationBuilder.AddColumn<int>(
                name: "MachineDataId",
                table: "Indicators",
                type: "int",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_MachineData_MachineId",
                table: "MachineData",
                column: "MachineId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Indicators_MachineDataId",
                table: "Indicators",
                column: "MachineDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_Indicators_MachineData_MachineDataId",
                table: "Indicators",
                column: "MachineDataId",
                principalTable: "MachineData",
                principalColumn: "Id");
        }
    }
}
