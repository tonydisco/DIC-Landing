import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to DIC -  Dong Tien",

  // other metadata
  description:
    "dic, dicdongtien, Đồng Tiến, bê tông thương phẩm, ống cống ly tâm, xây dựng dân dụng và công nghiệp, cho thuê văn phòng, bất động sản, Nhơn trạch, vật liệu xây dựng, cát, đá, xi măng, Bơm cần, bơm ngang, đại phước, đồng nai, long tân, thoát nước, trạm trộn, xe bồn, phanxiphang, bê tông việt nam, bê tông, ống cống, san lấp, san san lấp mặt bằng, đường bê tông, đổ bê tông, dicdongtien.vn, dicdongtien.com ",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mb-20">
        <Brands />
      </div>
      <Integration />
    </main>
  );
}
