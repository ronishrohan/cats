import axios from "axios";

export async function checkUser(onSuccess, onError) {
  try {
    const res = await axios.post("/api/users/current");

    onSuccess();
  } catch (error) {
    onError();
  }
}
