import axios from "axios";

export default async function registerUser(data){
    const res = await axios.post("api/users/register", data)
}