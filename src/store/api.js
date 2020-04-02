import axios from "axios";

const api = axios.create({
  //   timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  config => {
    const { tokenFund } = localStorage;
    if (tokenFund) {
      config.headers["Authorization"] = `Bearer ${tokenFund}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    throw error;
  }
);

export default api;
