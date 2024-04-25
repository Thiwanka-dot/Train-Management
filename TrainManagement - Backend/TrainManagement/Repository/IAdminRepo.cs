using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public interface IAdminRepo
    {
        List<Admin> GetAllAdmins();
        Admin GetAdminById(int id);
        void AddAdmin(Admin admin);
        void UpdateAdmin(Admin admin);
        void DeleteAdmin(int id);
    }
}
