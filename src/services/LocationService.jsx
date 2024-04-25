import axios from 'axios';

const BASE_URL = 'https://localhost:7040/api/Location';

const LocationService = {
    getAllLocations: async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    },

    addLocation: async (location) => {
        try {
            const response = await axios.post(`${BASE_URL}`, location);
            return response.data;
        } catch (error) {
            console.error('Error adding location:', error);
            throw error;
        }
    },

    getLocationById: async (locationId) => {
        try {
            const response = await axios.get(`${BASE_URL}/${locationId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching location by ID:', error);
            throw error;
        }
    },

    updateLocation: async (locationId, updatedLocation) => {
        try {
            const response = await axios.put(`${BASE_URL}/${locationId}`, updatedLocation);
            return response.data;
        } catch (error) {
            console.error('Error updating location:', error);
            throw error;
        }
    },

    deleteLocation: async (locationId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${locationId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting location:', error);
            throw error;
        }
    }
};

export default LocationService;
