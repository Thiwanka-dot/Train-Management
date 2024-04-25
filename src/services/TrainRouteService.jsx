import axios from 'axios';

const BASE_URL = 'https://localhost:7040/api/Route';

const TrainRouteService = {
    getAllRoutes: async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching train routes:', error);
            throw error;
        }
    },

    addRoute: async (route) => {
        try {
            const response = await axios.post(`${BASE_URL}`, route);
            return response.data;
        } catch (error) {
            console.error('Error adding train route:', error);
            throw error;
        }
    },

    getRouteById: async (trainId) => {
        try {
          const response = await axios.get(`${BASE_URL}/${trainId}`);
          return response.data;
        } catch (error) {
          console.error('Error fetching train by ID:', error);
          throw error;
        }
      },

    updateRoute: async (routeId, updatedRoute) => {
        try {
            const response = await axios.put(`${BASE_URL}/${routeId}`, updatedRoute);
            return response.data;
        } catch (error) {
            console.error('Error updating train route:', error);
            throw error;
        }
    },

    deleteRoute: async (routeId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${routeId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting train route:', error);
            throw error;
        }
    }
};

export default TrainRouteService;
