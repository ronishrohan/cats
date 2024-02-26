import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

function LoginForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="m-0 font-black">Login</h1>
      <Input placeholder="username" type="text"></Input>
      <Input placeholder="password" type="password"></Input>
      <Button>Login</Button>
    </div>
  );
}

export default LoginForm;
