"use client";
import React, { useState } from "react";

function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  return (
    <>
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
        <div className="m-auto w-96 pt-8 grid place-content-center">
          <p className="text-white lexend ml-4">&bull; Confirm Password</p>
          <input
            type="password"
            style={{
              width: "24rem",
            }}
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            className="rounded-full h-12 lexend px-8"
          />
        </div>
        <div className="m-auto w-96 pt-24 h-12 grid place-content-center">
          <button className="w-96 h-12 border-white border-2 text-white rounded-full">
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
