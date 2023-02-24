import axios from "axios";
import store from "../redux/store";

const instance = axios.create({
  baseURL: "/",
});

instance.interceptors.request.use(
  (config) => {
    const currentState = store.getState();
    const token = currentState.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// };

export default instance;
