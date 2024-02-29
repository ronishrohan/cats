import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/(auth)/login/page";
import Home from "./pages/(main)/home/page";
import Profile from "./pages/(main)/profile/page";
import Posts from "./pages/(main)/posts/page";
import Protected from "./pages/(main)/Protected";
import axiosConfig from "./utils/axiosConfig";

function App() {
  useEffect(() => {
    axiosConfig()
  }, [])
  return (
    <>
      <Routes>
        <Route element={<Protected></Protected>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/posts" element={<Posts></Posts>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
