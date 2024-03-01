import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "https://cats-backend-qdol.onrender.com/",
  withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      await axiosPrivate.post("/api/users/refresh-token");
      return axiosPrivate.request(error.config);
    }
    throw new Error(error);
  }
);

export { axiosPrivate };
