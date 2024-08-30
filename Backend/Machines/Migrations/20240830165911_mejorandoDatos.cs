using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Machines.Migrations
{
    /// <inheritdoc />
    public partial class mejorandoDatos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Claas Lexion 8800", 1.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 0.0, "John Deere ", 0.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "New Holland CR10.90", 4.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 1.0, "Case IH", 2.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Fendt Ideal 9", 3.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 6,
                column: "Description",
                value: "New Holland");

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 7,
                column: "Description",
                value: "Case IH Axial-Flow 9250");

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 4.0, "AMAZONE", 5.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "John Deere X9 1000", 7.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 6.0, "Jacto", 4.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 11,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "John Deere S790", 1.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "Deriva", "Description" },
                values: new object[] { 3.0, "Bucher" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Cosechadora A", 12.5 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 2.7000000000000002, "Pulverizadora B", 1.5 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Cosechadora C", 14.199999999999999 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 2.5, "Pulverizadora A", 1.2 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Cosechadora E", 13.800000000000001 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 6,
                column: "Description",
                value: "Pulverizadora C");

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 7,
                column: "Description",
                value: "Cosechadora G");

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 2.6000000000000001, "Pulverizadora D", 1.3 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Cosechadora I", 14.0 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "Deriva", "Description", "Taponamiento" },
                values: new object[] { 2.3999999999999999, "Pulverizadora E", 1.3999999999999999 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 11,
                columns: new[] { "Description", "HumedadGrano" },
                values: new object[] { "Cosechadora K", 12.199999999999999 });

            migrationBuilder.UpdateData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "Deriva", "Description" },
                values: new object[] { 2.5, "Pulverizadora F" });
        }
    }
}
