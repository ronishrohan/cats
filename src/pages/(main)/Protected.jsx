import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { checkUser } from "../../utils/checkUser";
import Header from "./components/Header";
function Protected() {
  const navigate = useNavigate();
  useEffect(() => {
    checkUser(
      () => (null),
      () => navigate("/login")
    );
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default Protected;
