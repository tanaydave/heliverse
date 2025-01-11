import axios from "axios";

const API_URL = "https://heliverse-3i2e.onrender.com/api/auth";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const register = async (credentials) => {
  const response = await axios.post(`${API_URL}/register`, credentials);
  return response.data;
};
