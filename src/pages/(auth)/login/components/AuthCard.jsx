import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion";
import registerUser from "../../../../utils/registerUser";
import loginUser from "../../../../utils/loginUser";
import { useNavigate } from "react-router-dom";

function AuthCard() {
  const navigate = useNavigate();
  const [isNew, setIsNew] = useState(false);
  const [hovered, setHoverd] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = e.target;
    console.log(formData);
    if (isNew) {
      const res = await registerUser({
        username: formData.username.value,
        password: formData.password.value,
      });
      if(res){
        console.log("user created successfully")
      }
    } else {
      const res = await loginUser({
        username: formData.username.value,
        password: formData.password.value,
      });
      if(res.status == 201 || res.status == 200){
        navigate("/home")
      }
    }
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: hovered ? "-80%" : "0%" }}
        transition={{ type: "spring", damping: 20 }}
        className="absolute right-0 top-0 -z-10"
      >
        <img width={100} src="/gifs/cat.gif" alt="" />
      </motion.div>
      <form
        onSubmit={handleSubmit}
        onFocus={() => setHoverd(true)}
        onBlur={() => setHoverd(false)}
        spellCheck={false}
        className="p-4 z-20 bg-card-900 text-primary-900 border-2 border-card-100 rounded-3xl  w-96 flex flex-col gap-4"
      >
        {isNew ? <SignupForm></SignupForm> : <LoginForm></LoginForm>}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
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
