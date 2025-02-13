import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const getQuizzes = async () => {
  const response = await axios.get(`${API_BASE_URL}/quizzes`);
  return response.data;
};

export const getQuizById = async (quizId) => {
  const response = await axios.get(`${API_BASE_URL}/quiz/${quizId}`);
  return response.data;
};
