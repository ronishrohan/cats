import { axiosPrivate } from "./axiosConfig";

export default async function registerUser(data){
    const res = await axiosPrivate.post("api/users/register", data)
}