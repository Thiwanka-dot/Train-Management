import axios from 'axios';

const BASE_URL = 'https://localhost:7040/api/Admin';

const AdminService = {
  getAllAdmins: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching admins:', error);
      throw error;
    }
  },

  addAdmin: async (admin) => {
    try {
      const response = await axios.post(BASE_URL, admin);
      return response.data;
    } catch (error) {
      console.error('Error adding admin:', error);
      throw error;
    }
  },

  getAdminById: async (adminId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${adminId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching admin by ID:', error);
      throw error;
    }
  },

  updateAdmin: async (adminId, updatedAdmin) => {
    try {
      const response = await axios.put(`${BASE_URL}/${adminId}`, updatedAdmin);
      return response.data;
    } catch (error) {
      console.error('Error updating admin:', error);
      throw error;
    }
  },

  deleteAdmin: async (adminId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${adminId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting admin:', error);
      throw error;
    }
  }
};

export default AdminService;
