using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NetCoreTemplate.DataAccess.EF.Migrations
{
    public partial class AddAddressPhonesmanytomanyrelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AddressLine = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    ModifyDate = table.Column<DateTime>(nullable: false),
                    PostalCode = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AddressPhone",
                columns: table => new
                {
                    AddressId = table.Column<Guid>(nullable: false),
                    PhoneId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddressPhone", x => new { x.AddressId, x.PhoneId });
                    table.ForeignKey(
                        name: "FK_AddressPhone_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AddressPhone_Phones_PhoneId",
                        column: x => x.PhoneId,
                        principalTable: "Phones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AddressPhone_PhoneId",
                table: "AddressPhone",
                column: "PhoneId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AddressPhone");

            migrationBuilder.DropTable(
                name: "Addresses");
        }
    }
}
