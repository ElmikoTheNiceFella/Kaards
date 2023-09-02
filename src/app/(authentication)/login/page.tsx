"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState("LOGIN");

  const router = useRouter();

  const handleClick = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const signInData = await signIn('credentials', {
      username: usernameValue,
      password: passwordValue,
      redirect: false
    })
    setLoading(false);
    if(signInData?.error) {
      setLoginState("ERROR");
    } else {
      setLoginState("LOGGED IN");
      router.push('/userDashboard');
    }
  }

  return (
    <>
      <form
        onSubmit={handleClick}
        id="login-page"
        style={{
          boxShadow: "-20px 20px 0px black",
          border: "3px solid white",
        }}
        className="w-[30rem] h-[570px] rounded-3xl py-12 bg-[#202020] m-auto mt-24"
      >
        <h2 className="lexend flex justify-center gap-4 text-[#202020] w-96 m-auto py-4 h-16 items-center rounded-full font-bold bg-white text-center text-3xl">
          { loading ? 
            Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 50}ms` }}
              className="w-4 h-4 anim rounded-full register-anim bg-[#202020]"
            ></div>
          )) : loginState}
        </h2>
        <div className="m-auto w-96 pt-8 grid place-content-center">
          <p className="text-white lexend ml-4">&bull; Username</p>
          <input
            type="text"
            style={{
              width: "24rem"
            }}
            value={usernameValue}
            name="username"
            onChange={(e) => setUsernameValue(e.target.value)}
            placeholder="User"
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
            name="password"
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="Password"
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
            LOGIN
          </button>
          <div className="w-full my-4 h-[1px] rounded-full bg-white"></div>
          <button className="w-96 h-12 border-white border-2 text-white rounded-full">
            LOGIN AS A RECRUITER
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;
