import "../../globals.css";
import { loginHandler } from "@/auth";
import { getSession } from "next-auth/react";

async function UserDashboard() {

  const session = await getSession();
  console.log(session);

  return (
    <nav className="flex justify-around py-12 items-center">
      <h3 className="text-3xl">
        Welcome, <strong></strong>
      </h3>
      <ul className="flex gap-4 text-lg">
        <a href="#">New Kaard</a>
        <a href="#">Activities</a>
        <a href="#">Contact</a>
      </ul>
      <button className="text-white font-semibold bg-[#202020] w-44 text-2xl h-16 rounded-full">
        LOG OUT
      </button>
    </nav>
  );
}

export default UserDashboard;
