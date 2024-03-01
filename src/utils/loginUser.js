import { axiosPrivate } from "./axiosConfig";

export default async function loginUser(data){
    const res = await axiosPrivate.post("/api/users/login", data)
    return res;
}