import axios from "axios";
axios.defaults.baseURL = "https://agua-vivo-app-backend.onrender.com";
// axios.defaults.baseURL = "http://localhost:8000";

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const handleToken = (token: string | null) => {
  if (token === null) {
    throw Error("Unauthorized");
  }

  setToken(token);
};
