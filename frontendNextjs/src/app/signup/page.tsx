"use client";
import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}>
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
          <div className="text-center text-2xl font-semibold text-gray-700 mb-6">Sign Up</div>
          <div className="flex flex-col gap-6">
            <InputBox
              autoComplete="off"
              name="name"
              labelText="Name"
              required
              onChange={(e) => (data.current.name = e.target.value)}
            />
            <InputBox
              name="email"
              labelText="Email"
              required
              onChange={(e) => (data.current.email = e.target.value)}
            />
            <InputBox
              name="password"
              labelText="Password"
              type="password"
              required
              onChange={(e) => (data.current.password = e.target.value)}
            />
            <div className="flex justify-between gap-2">
              <Button onClick={register}>Submit</Button>
              <Link className="text-gray-600 hover:text-gray-800" href={"/"}>Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
