import Image from "next/image";
import SliderHome from "@/app/components/SliderHome/SliderHome";
import About from "@/app/components/HomePage/About/About";
import Books from "@/app/components/HomePage/Books/Books";
import Service from "@/app/components/HomePage/Service/Service";
export default function Home() {
  return (
    <div className="">
      <SliderHome />
      <About />
      <Books />
      <Service />
    </div>
  );
}
