import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const getQuestion = async (studentId, cell) => {

  const response = await API.get(
    `/game/question/${studentId}/${cell}`
  );

  return response.data;
};