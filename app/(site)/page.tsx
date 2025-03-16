import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "...: Welcome to DIC -  Dong Tien :...",

  // other metadata
  description:
    "dic, dicdongtien, Đồng Tiến, bê tông thương phẩm, ống cống ly tâm, xây dựng dân dụng và công nghiệp, cho thuê văn phòng, bất động sản, Nhơn trạch, vật liệu xây dựng, cát, đá, xi măng, Bơm cần, bơm ngang, đại phước, đồng nai, long tân, thoát nước, trạm trộn, xe bồn, phanxiphang, bê tông việt nam, bê tông, ống cống, san lấp, san san lấp mặt bằng, đường bê tông, đổ bê tông, dicdongtien.vn, dicdongtien.com ",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Integration />
      {/* <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog /> */}
    </main>
  );
}
