import Hero from "@/app/UiComponents/Hero/Hero";
import ServiceUniforms from "@/app/UiComponents/ServiceUniforms/ServiceUniforms";
import About from "@/app/UiComponents/About/About";
import Embroidery from "@/app/UiComponents/Embroidery/Embroidery";
import AboutSec2 from "@/app/UiComponents/AboutSec2/AboutSec2";
import AboutSec3 from "@/app/UiComponents/AboutSec3/AboutSec3";
import Printing from "@/app/UiComponents/Printing/Printing";
import Info from "@/app/UiComponents/Info/Info";
import Map from "@/app/UiComponents/Map/Map";
import Brand from "@/app/UiComponents/Brand/Brand";
import ListBlog from "@/app/UiComponents/ListBlog/ListBlog";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
  if (!baseUrl) {
    return null;
  }
  return (
    <div className="">
      <Hero />
      <ServiceUniforms />
      <About />
      <Embroidery />
      <AboutSec2 />
      <Printing />
      <ListBlog />
      <AboutSec3 />
      <Info />
      <Map />
      <Brand />
    </div>
  );
}
