using Microsoft.EntityFrameworkCore;
using TrainManagement.Models;

namespace TrainManagement.Data
{
    public class AppDbContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TrainAvailability>()
                .HasKey(ta => ta.AvailabilityID);
            modelBuilder.Entity<TrainRoute>()
                .HasKey(tr => tr.RouteID);
            modelBuilder.Entity<Booking>()
                .HasKey(b => b.BookingID);
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Train> Trains { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<TrainRoute> TrainRoutes { get; set; }
        public DbSet<TrainAvailability> TrainAvailability { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<Admin> Admin { get; set; }

        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        }
    }
}
