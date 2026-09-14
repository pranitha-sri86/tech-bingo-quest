import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const getQuestions = async () => {
  const response = await API.get("/questions");
  return response.data;
};

export const deleteQuestion = async (id) => {
  const response = await API.delete(`/questions/${id}`);
  return response.data;
};

export const updateQuestion = async (id, data) => {
  const response = await API.put(`/questions/${id}`, data);
  return response.data;
};

export const createQuestion = async (questionData) => {
  const response = await API.post("/questions/create", questionData);
  return response.data;
};