
import { axiosPrivate } from "./axiosConfig";

export default async function getUserDetails(){
    const res = await axiosPrivate.post("/api/users/current");
    console.log(res.data.data)
    return res.data.data;
}