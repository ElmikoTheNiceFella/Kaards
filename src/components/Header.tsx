import Card from "./Card"
import headerCardImage from "../assets/headerCardImage.jpg";
import rotatingText from "../assets/Vector.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="p-24 flex w-fit m-auto gap-56">
      <div
        style={{
          filter: "drop-shadow(0px 0px 10px #D9D9D9)",
        }}
      >
        <div className="relative z-50">
          <Card
            author="Developer"
            image={headerCardImage}
            title={"Amazing free Wallpapers for Linux"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quae incidunt voluptatibus, error nisi aliquid alias necessitatibus hic dicta, officia nulla pariatur quod doloribus unde iure. Ducimus animi quibusdam aliquam. Quibusdam iste alias maiores est nesciunt itaque beatae dicta eius id accusamus quidem omnis porro provident iusto eaque blanditiis, facere eos fugiat."
            }
          />
        </div>
        <div className="relative -mt-[27rem] opacity-70  -ml-24">
          <Card
            author="Developer"
            image={headerCardImage}
            title={"Amazing free Wallpapers for Linux"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quae incidunt voluptatibus, error nisi aliquid alias necessitatibus hic dicta, officia nulla pariatur quod doloribus unde iure. Ducimus animi quibusdam aliquam. Quibusdam iste alias maiores est nesciunt itaque beatae dicta eius id accusamus quidem omnis porro provident iusto eaque blanditiis, facere eos fugiat."
            }
          />
        </div>
      </div>
      <div>
        <h1 className="text-[4rem] lexend leading-[5rem]">
          SHARE
          <br /> A STORY WITH
          <br /> <strong>KARDS</strong>
        </h1>
        <p className="text-lg lexend mt-4">
          Your go to tool for making short articles.
        </p>
      </div>
      <button className="absolute h-72 w-72 flex justify-center items-center rounded-full right-56 mt-80 bg-black">
        <Image
          src={rotatingText}
          className="absolute rotation-animation"
          alt=""
        />
        <div className="absolute w-[152px] h-[152px] bg-[#D6D6D6] flex justify-center items-center rounded-full">
          <div className="flex justify-center items-center">
            <div className="w-2 h-16 rounded-full bg-[#202020]"></div>
            <div className="w-2 h-16 absolute rotate-90 rounded-full bg-[#202020]"></div>
          </div>
        </div>
      </button>
    </header>
  );
}

export default Header