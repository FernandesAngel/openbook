import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// api.defaults.headers.common["x-access-origin"] =
//   import.meta.env.VITE_ACCESS_ORIGIN;

export { api };
