import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/(auth)/login/page";
import Home from "./pages/(main)/home/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
