"use client";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import "../../globals.css";

function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e:FormEvent<HTMLButtonElement>) => {
    
    e.preventDefault();
    
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameValue,
        email: emailValue,
        password: passwordValue
      })
    })

    if (response.ok) {
      
    } else {
      console.log("Registration failed")
    }
  }

  return (
    <>
      <div className="absolute h-screen hidden place-content-center w-full inset-0 bg-gray-500 bg-opacity-50">
        <div className="w-96 px-56 py-32 h-72 rounded-xl flex justify-center bg-white">
          <div
            id="register-loading"
            style={{
              display: loading ? "flex" : "none"
            }}
            className="gap-4 absolute"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 100}ms` }}
                className="w-6 h-6 anim rounded-full register-anim bg-[#202020]"
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="login-page"
        style={{
          boxShadow: "-20px 20px 0px black",
          border: "3px solid white",
        }}
        className="w-[30rem] h-[640px] rounded-3xl py-12 bg-[#202020] m-auto mt-12 lg:mt-24"
      >
        <h2 className="lexend text-[#202020] w-96 m-auto py-4 rounded-full font-bold bg-white text-center text-3xl">
          REGISTER
        </h2>
        <div className="m-auto w-96 pt-8 grid place-content-center">
          <p className="text-white lexend ml-4">&bull; Username</p>
          <input
            type="text"
            style={{
              width: "24rem",
            }}
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
            className="rounded-full h-12 lexend px-8"
          />
        </div>
        <div className="m-auto w-96 pt-8 grid place-content-center">
          <p className="text-white lexend ml-4">&bull; E-mail</p>
          <input
            type="email"
            style={{
              width: "24rem",
            }}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="rounded-full h-12 lexend px-8"
          />
        </div>
        <div className="m-auto w-96 pt-8 grid place-content-center">
          <p className="text-white lexend ml-4">&bull; Password</p>
          <input
            type="password"
            style={{
              width: "24rem",
            }}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            className="rounded-full h-12 lexend px-8"
          />
        </div>
        <div className="m-auto w-96 pt-24 h-12 grid place-content-center">
          <button
            onClick={handleSubmit}
            className="w-96 h-12 border-white border-2 text-white rounded-full"
          >
            REGISTER
          </button>
          <div className="w-full my-4 h-[1px] rounded-full bg-white"></div>
          <button className="w-96 h-12 border-white border-2 text-white rounded-full">
            SIGN UP WITH GITHUB
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
