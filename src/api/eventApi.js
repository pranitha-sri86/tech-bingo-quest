import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Create Event
export const createEvent = async (eventData) => {
  const response = await API.post("/events/create", eventData);
  return response.data;
};

// Start Event
export const startGame = async (id) => {
  const response = await API.post("/events/start");
  return response.data;
};

// Get Current Event
export const getCurrentEvent = async () => {
  const response = await API.get("/events/");
  return response.data;
};