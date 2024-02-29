import axios from "axios";

export default async function logoutUser(){
    await axios.post("/api/users/logout");
}