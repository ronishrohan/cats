import axios from "axios";

export default async function getUserDetails(){
    const res = await axios.post("/api/users/current");

    return res.data.data;
}