import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

function SignupForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="m-0 font-black">Sign up</h1>
      <Input name="email" placeholder="email" type="text"></Input>
      <Input name="username" placeholder="username" type="text"></Input>
      <Input name="password" placeholder="password" type="password"></Input>
      <Input name="confirm" placeholder="confirm password" type="password"></Input>
      <Button>Sign up</Button>
    </div>
  );
}

export default SignupForm;
