import React from "react";
import Button from "../../../components/Button";
import logoutUser from "../../../utils/logoutUser";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  async function handleLogout(){
    await logoutUser();
    navigate("/login")
  }
  return (
    <section className="pt-16 h-full">
      <div className="w-full h-full p-4 grid grid-cols-[1fr_2fr] gap-4" >
        <div className="border-2 border-card-100 rounded-3xl bg-card-900 flex items-center justify-center" >
          <Button onClick={handleLogout} >logout</Button>
        </div>
        <div className="border-2 border-card-100 rounded-3xl h-full"></div>
      </div>
    </section>
  );
}

export default Profile;
