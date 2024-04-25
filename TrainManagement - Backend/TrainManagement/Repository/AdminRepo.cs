using Microsoft.EntityFrameworkCore;
using TrainManagement.Data;
using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public class AdminRepo : IAdminRepo
    {
        private readonly AppDbContext _context;

        public AdminRepo(AppDbContext context)
        {
            _context = context;
        }

        public List<Admin> GetAllAdmins()
        {
            return _context.Admin.ToList();
        }

        public Admin GetAdminById(int id)
        {
            return _context.Admin.FirstOrDefault(a => a.AdminID == id);
        }

        public void AddAdmin(Admin admin)
        {
            if (admin == null)
            {
                throw new ArgumentNullException(nameof(admin));
            }

            _context.Admin.Add(admin);
            _context.SaveChanges();
        }

        public void UpdateAdmin(Admin admin)
        {
            if (admin == null)
            {
                throw new ArgumentNullException(nameof(admin));
            }

            _context.Entry(admin).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteAdmin(int id)
        {
            var admin = _context.Admin.Find(id);
            if (admin == null)
            {
                throw new ArgumentNullException(nameof(admin));
            }

            _context.Admin.Remove(admin);
            _context.SaveChanges();
        }
    }
}
