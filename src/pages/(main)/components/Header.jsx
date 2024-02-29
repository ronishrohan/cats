import React from "react";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

function Header() {
  return (
    <nav className="fixed px-4 top-0 w-full h-16 bg-card-900 border-b-2 border-card-100 flex justify-between items-center gap-2">
      <span className="font-semibold text-3xl text-primary-900">cats</span>
      <SearchBar></SearchBar>
      <div className="flex gap-2">
        <NavLink to="/home">home</NavLink>
        <NavLink to="/posts" >posts</NavLink>
        <NavLink to="/profile" >profile</NavLink>
      </div>
    </nav>
  );
}

export default Header;
