'use client'
import { useState } from "react";

function Navbar() {

  const [toggle, setToggle] = useState(false);
  const [displayToggle, setDisplayToggle] = useState(false);
  
  const handleToggle = () => {
    setDisplayToggle((t) => !t);
    if (toggle) {
      setTimeout(() => setToggle((t) => !t), 200);
    } else {
      setToggle((t) => !t);
    }
  };

  return (
    <nav className="py-12 flex justify-around items-center">
      <div className="flex gap-12 items-center">
        <div className="w-16 h-16 bg-[#202020] rounded-full"></div>
        <button className="bg-[#202020] rounded-full flex items-center gap-2 text-white lexend text-xl h-12 pl-10 pr-16 uppercase">
          make a card
          <div>
            <div className="w-5 h-0.5 bg-white absolute rounded-full"></div>
            <div className="w-5 h-0.5 bg-white absolute rotate-90 rounded-full"></div>
          </div>
        </button>
      </div>
      <ul id="nav-list"  className="flex gap-12 text-xl font-semibold">
        <li>About-Us</li>
        <li>Tutorial</li>
        <li>
          <span onClick={handleToggle}>Categories</span>{" "}
            <div
              style={{
                position: "absolute",
                transform: `translateY(-${displayToggle ? 0 : 5}%)`,
                opacity: displayToggle ? 1 : 0,
                transition: "0.2s ease",
                filter: "drop-shadow(0px 0px 5px #e6e6e6",
              }}
            >
              {toggle &&
                <div className="w-72 h-44 rounded-xl place-content-around pr-4 text-center -ml-[5.5rem] bg-white grid grid-cols-2 mt-4">
                  <a href="#" className="text-[#2c393f]">
                    Sports
                  </a>
                  <a href="#" className="text-[#2c393f]">
                    Tech
                  </a>
                  <a href="#" className="text-[#2c393f]">
                    Tourism
                  </a>
                  <a href="#" className="text-[#2c393f]">
                    Geography
                  </a>
                </div>
              }
            </div>
        </li>
        <li>Contact-Us</li>
      </ul>
      <div className="flex gap-4">
        <button className="bg-[#202020] border-2 border-[#202020] rounded-full gap-2 text-white lexend text-xl h-14 w-40 text-center uppercase">
          Login
        </button>
        <button className="bg-white rounded-full gap-2 text-[#202020] border-2 border-[#202020] lexend text-xl h-14 w-44 text-center uppercase">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar