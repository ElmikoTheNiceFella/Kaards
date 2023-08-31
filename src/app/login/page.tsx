"use client";
import React, { useState } from "react";
import Link from "next/link";

function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <div
        id="login-page"
        style={{
          boxShadow: "-20px 20px 0px black",
          border: "3px solid white",
        }}
        className="w-[30rem] h-[570px] rounded-3xl py-12 bg-[#202020] m-auto mt-24"
      >
        <h2 className="lexend text-[#202020] w-96 m-auto py-4 rounded-full font-bold bg-white text-center text-3xl">
          LOGIN
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
        <div className="flex px-16 pt-4 justify-between">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="remember-password"
              className="w-4 h-4 rounded-sm bg-white checked:bg-gray-800 checked:border-2 checked:border-white"
              style={{
                appearance: "none",
              }}
              id="remember-password"
            />
            <label htmlFor="remember-password" className="text-gray-300">
              Remember Password
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="lexent text-gray-300 underline"
          >
            Forgot Password
          </Link>
        </div>
        <div className="m-auto w-96 pt-24 h-12 grid place-content-center">
          <button className="w-96 h-12 border-white border-2 text-white rounded-full">
            LOGIN{" "}
          </button>
          <div className="w-full my-4 h-[1px] rounded-full bg-white"></div>
          <button className="w-96 h-12 border-white border-2 text-white rounded-full">
            LOGIN WITH GITHUB
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
