import { axiosPrivate } from "./axiosConfig";

export default async function logoutUser(){
    await axiosPrivate.post("/api/users/logout");
}