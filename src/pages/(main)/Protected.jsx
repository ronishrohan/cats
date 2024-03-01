import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { checkUser } from "../../utils/checkUser";
import getUserDetails from "../../utils/getUser";
import Header from "./components/Header";
import useSession from "../../hooks/useSession";

function Protected() {
  const { updateUser } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    checkUser(
      () => null,
      () => navigate("/login")
    );
    async function userInit() {
      const data = await getUserDetails();
      console.log(data);
      updateUser(data);
    }
    userInit();
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default Protected;
