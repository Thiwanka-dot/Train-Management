using Microsoft.AspNetCore.Mvc;
using TrainManagement.Models;
using TrainManagement.Repository;

namespace TrainManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepo _adminRepo;

        public AdminController(IAdminRepo adminRepo)
        {
            _adminRepo = adminRepo;
        }

        [HttpGet]
        public IActionResult GetAllAdmins()
        {
            var admins = _adminRepo.GetAllAdmins();
            return Ok(admins);
        }

        [HttpGet("{id}")]
        public IActionResult GetAdminById(int id)
        {
            var admin = _adminRepo.GetAdminById(id);
            if (admin == null)
            {
                return NotFound();
            }
            return Ok(admin);
        }

        [HttpPost]
        public IActionResult AddAdmin([FromBody] Admin admin)
        {
            if (admin == null)
            {
                return BadRequest();
            }

            _adminRepo.AddAdmin(admin);
            return CreatedAtAction(nameof(GetAdminById), new { id = admin.AdminID }, admin);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAdmin(int id, [FromBody] Admin updatedAdmin)
        {
            if (updatedAdmin == null)
            {
                return BadRequest();
            }

            var existingAdmin = _adminRepo.GetAdminById(id);
            if (existingAdmin == null)
            {
                return NotFound();
            }

            existingAdmin.AdminName = updatedAdmin.AdminName;
            existingAdmin.Email = updatedAdmin.Email;
            existingAdmin.Password = updatedAdmin.Password;

            _adminRepo.UpdateAdmin(existingAdmin);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAdmin(int id)
        {
            var existingAdmin = _adminRepo.GetAdminById(id);
            if (existingAdmin == null)
            {
                return NotFound();
            }

            _adminRepo.DeleteAdmin(id);

            return NoContent();
        }
    }
}
