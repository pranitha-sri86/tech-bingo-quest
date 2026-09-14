import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const joinEvent = async (student) => {
  return (await API.post("/students/join", student)).data;
};

export const getStudents = async (eventCode) => {
  return (
    await API.get("/students", {
      params: { eventCode },
    })
  ).data;
};