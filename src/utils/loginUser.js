import axios from "axios";

export default async function loginUser(data){
    const res = await axios.post("/api/users/login", data)
    console.log(res);
}