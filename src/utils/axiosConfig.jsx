import axios from "axios";

export default function axiosConfig() {
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      throw new Error(error)
        if (error.response && error.response.status === 401){
            await axios.post("/api/users/refresh-token")
            return axios.request(error.config)
        }
    }
  );
}
