'use client'
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Arrow from "../assets/headerReadMoreArrow.svg";

function Card({ image, title, description, author }: Props) {

  return (
    <div className="w-[504px] bg-[#D9D9D9] rounded-3xl shrink-0">
      <Image
        src={image}
        className="h-[206px] w-full object-cover bg-black rounded-t-3xl pointer-events-none"
        alt=""
        style={{
          borderBottom: "5px solid #202020",
        }}
      />
      <h3 className="text-2xl w-5/6 m-auto font-bold pt-4">{title}</h3>
      <p className="w-5/6 m-auto">- {author}</p>
      <p className="w-5/6 m-auto py-4 h-[160px] overflow-hidden">
        {description}
      </p>
      <div
        style={{
          backgroundImage: "linear-gradient(transparent, #D9D9D9)",
        }}
        className="h-[50px] relative bottom-12"
      ></div>
      <button
      onClick={() => alert("Hello World")} className="m-auto uppercase lexend w-5/6 flex relative bottom-8 justify-center items-center py-3 rounded-lg text-white bg-[#202020]">
        read more&nbsp;&nbsp;
        <Image src={Arrow} className="w-4" alt="" />
      </button>
    </div>
  );
}

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  author: string
};
export default Card;
