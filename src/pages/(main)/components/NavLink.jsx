import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavLink({ children, ...others }) {
  const { pathname } = useLocation();
  return (
    <Link
      {...others}
      className={`min-w-20 h-10 bg-primary-300 border-b-4 ${pathname==others.to && "bg-primary-200 border-b-[2px]"} border-2 hover:border-b-2 grid place-items-center border-card-100 rounded-xl transition-all active:scale-95 text-card-100 font-semibold hover:bg-primary-200`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
