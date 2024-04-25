import axios from 'axios';

const BASE_URL = 'https://localhost:7040/api/Train';

const TrainService = {
  getAllTrains: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching trains:', error);
      throw error;
    }
  },

  addTrain: async (train) => {
    try {
      const response = await axios.post(`${BASE_URL}`, train);
      return response.data;
    } catch (error) {
      console.error('Error adding train:', error);
      throw error;
    }
  },

  getTrainById: async (trainId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${trainId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching train by ID:', error);
      throw error;
    }
  },

  updateTrain: async (trainId, updatedTrain) => {
    try {
      const response = await axios.put(`${BASE_URL}/${trainId}`, updatedTrain);
      return response.data;
    } catch (error) {
      console.error('Error updating train:', error);
      throw error;
    }
  },

  deleteTrain: async (trainId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${trainId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting train:', error);
      throw error;
    }
  }
};

export default TrainService;
