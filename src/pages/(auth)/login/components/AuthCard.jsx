import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function AuthCard() {
  const [isNew, setIsNew] = useState(false);

  return (
    <div className="p-4 bg-card-900 text-primary-900 border-2 border-card-100 rounded-3xl  w-96 flex flex-col gap-4">
      
      {isNew ? <SignupForm></SignupForm> : <LoginForm></LoginForm>}
      <button
        onClick={() => {
          setIsNew((prev) => !prev);
        }}
        className="text-primary-900 w-full text-center hover:underline"
      >
        {isNew ? "already have an account?" : "dont have an account?"}
      </button>
    </div>
  );
}

export default AuthCard;
