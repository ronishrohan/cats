
import { axiosPrivate } from "./axiosConfig";

export async function checkUser(onSuccess, onError) {
  try {
    const res = await axiosPrivate.post("/api/users/current");

    onSuccess();
  } catch (error) {
    onError();
  }
}
