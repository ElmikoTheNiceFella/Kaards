import Carousel from "./Carousel";

function Main() {
  return (
    <main className="px-24">
      <h2 className="lexend text-5xl">
        Latest <strong>KAARDS</strong>
      </h2>
      <div className="h-1 w-[22.5rem] mt-2 bg-[#202020]"></div>
      <Carousel/>
    </main>
  );
}

export default Main