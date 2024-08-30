﻿// <auto-generated />
using Machines.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Machines.Migrations
{
    [DbContext(typeof(MachineContext))]
    [Migration("20240828204000_mejorando-relaciones2")]
    partial class mejorandorelaciones2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Machines.Models.Indicator", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<double>("Calidad")
                        .HasColumnType("float");

                    b.Property<string>("Cultivo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Deriva")
                        .HasColumnType("float");

                    b.Property<double>("Evaporacion")
                        .HasColumnType("float");

                    b.Property<double>("HumedadGrano")
                        .HasColumnType("float");

                    b.Property<int>("MachineId")
                        .HasColumnType("int");

                    b.Property<double>("RindeHumedo")
                        .HasColumnType("float");

                    b.Property<double>("RindeSeco")
                        .HasColumnType("float");

                    b.Property<double>("Taponamiento")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("MachineId");

                    b.ToTable("Indicators");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Calidad = 95.5,
                            Cultivo = "Maíz",
                            Deriva = 1.0,
                            Evaporacion = 2.1000000000000001,
                            HumedadGrano = 12.5,
                            MachineId = 1,
                            RindeHumedo = 20.5,
                            RindeSeco = 18.0,
                            Taponamiento = 0.0
                        },
                        new
                        {
                            Id = 2,
                            Calidad = 97.0,
                            Cultivo = "Trigo",
                            Deriva = 0.5,
                            Evaporacion = 1.8,
                            HumedadGrano = 11.0,
                            MachineId = 2,
                            RindeHumedo = 22.0,
                            RindeSeco = 19.5,
                            Taponamiento = 0.0
                        });
                });

            modelBuilder.Entity("Machines.Models.Machine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Company")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Moving")
                        .HasColumnType("bit");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Machines");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Company = "FarmCo",
                            Description = "Harvesting Machine A",
                            Moving = true,
                            Type = "Cosechadora"
                        },
                        new
                        {
                            Id = 2,
                            Company = "AgriTech",
                            Description = "Spraying Machine B",
                            Moving = false,
                            Type = "Pulverizadora"
                        });
                });

            modelBuilder.Entity("Machines.Models.Indicator", b =>
                {
                    b.HasOne("Machines.Models.Machine", "Machine")
                        .WithMany("Indicators")
                        .HasForeignKey("MachineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Machine");
                });

            modelBuilder.Entity("Machines.Models.Machine", b =>
                {
                    b.Navigation("Indicators");
                });
#pragma warning restore 612, 618
        }
    }
}
