"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { PureImage } from "../Common/SectionHeader";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="mx-auto max-w-c-1390">
        <div className="relative mx-auto ">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg p-7.5  dark:border dark:border-strokedark dark:bg-black "
            >
              <h2 className="text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Giới thiệu chung
              </h2>

              <p className="mb-3 p-6">
                DIC Đồng Tiến là doanh nghiệp hàng đầu trong lĩnh vực cung cấp
                bê tông thương phẩm, ống cống ly tâm và vật liệu xây dựng tại
                Việt Nam. Với kinh nghiệm nhiều năm trong ngành, công ty không
                chỉ phục vụ các dự án xây dựng dân dụng và công nghiệp mà còn mở
                rộng sang lĩnh vực bất động sản và cho thuê văn phòng. Hoạt động
                chủ yếu tại khu vực Nhơn Trạch, Đồng Nai và các vùng lân cận như
                Đại Phước, Long Tân, DIC Đồng Tiến sở hữu hệ thống trạm trộn
                hiện đại, xe bồn vận chuyển chuyên dụng, cũng như các thiết bị
                bơm cần, bơm ngang tiên tiến, đảm bảo chất lượng sản phẩm và
                tiến độ thi công. Ngoài ra, công ty còn cung cấp dịch vụ san lấp
                mặt bằng, thi công đường bê tông và giải pháp thoát nước, góp
                phần vào sự phát triển bền vững của hạ tầng đô thị. Với cam kết
                không ngừng cải tiến và nâng cao chất lượng, DIC Đồng Tiến luôn
                là đối tác tin cậy của nhiều chủ đầu tư và đơn vị thi công trên
                cả nước. <br />
              </p>

              <div className=" relative aspect-[700/444] h-full w-full">
                <PureImage url="/images/about/GIAYPHEP_DKKD.png" />
              </div>

              <div className="mb-3 gap-3 p-6 md:flex">
                <p>ĐIỀU LỆ CÔNG TY CỔ PHẦN DIC ĐỒNG TIẾN 2017</p>
                <a className="text-blue-400" href="/">
                  xem ở đây
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
