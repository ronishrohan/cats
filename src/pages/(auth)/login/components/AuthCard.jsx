import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion";

function AuthCard() {
  const [isNew, setIsNew] = useState(false);
  const [hovered, setHoverd] = useState(false);

  return (
    <div className="relative">
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: hovered ? "-80%" : "0%" }}
        transition={{type: "spring", damping: 20}}
        className="absolute right-0 top-0 -z-10"
      >
        <img width={100} src="/gifs/cat.gif" alt="" />
      </motion.div>
      <form
        onPointerEnter={() => setHoverd(true)}
        onPointerLeave={() => setHoverd(false)}
        spellCheck={false}
        className="p-4 z-20 bg-card-900 text-primary-900 border-2 border-card-100 rounded-3xl  w-96 flex flex-col gap-4"
      >
        {isNew ? <SignupForm></SignupForm> : <LoginForm></LoginForm>}
        <button
          onClick={() => {
            setIsNew((prev) => !prev);
          }}
          className="text-primary-900 w-full text-center hover:underline"
        >
          {isNew ? "already have an account?" : "dont have an account?"}
        </button>
      </form>
    </div>
  );
}

export default AuthCard;