import axios from 'axios';

const BASE_URL = 'https://localhost:7040/api/TrainAvailability';

const TrainAvailabilityService = {
    getAllAvailabilities: async () => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching train availabilities:', error);
            throw error;
        }
    },

    addAvailability: async (availability) => {
        try {
            const response = await axios.post(BASE_URL, availability);
            return response.data;
        } catch (error) {
            console.error('Error adding train availability:', error);
            throw error;
        }
    },

    getAvailabilityById: async (trainId) => {
        try {
            const response = await axios.get(`${BASE_URL}/${trainId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching availability by ID:', error);
            throw error;
        }
    },

    updateAvailability: async (availabilityId, updatedAvailability) => {
        try {
            const response = await axios.put(`${BASE_URL}/${availabilityId}`, updatedAvailability);
            return response.data;
        } catch (error) {
            console.error('Error updating availability:', error);
            throw error;
        }
    },

    deleteAvailability: async (availabilityId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${availabilityId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting availability:', error);
            throw error;
        }
    }
};

export default TrainAvailabilityService;
