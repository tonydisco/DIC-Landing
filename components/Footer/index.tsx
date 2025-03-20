"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Footer Top --> */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-full lg:w-1/3"
            >
              <a href="/" className="relative">
                <Image
                  width={65}
                  height={65}
                  sizes="(max-width: 768px) 100vw"
                  src="/images/logo/LOGO.png"
                  alt="logo"
                />
              </a>

              <div className="relative mx-auto mt-5 h-full w-full text-black dark:text-white">
                <p className="h-[200px] w-[350px] max-w-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31360.742447313067!2d106.8654487743164!3d10.7273251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317522ac4e277eb9%3A0xf3c6b7dfbe24a1c2!2zQ8O0bmcgVHkgQ3AgRGljIFjDonkgROG7sW5nIMSQ4buTbmcgVGnhur9u!5e0!3m2!1svi!2s!4v1742442350872!5m2!1svi!2s"
                    style={{
                      border: 0,
                      borderRadius: 12,
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    loading="lazy"
                    title="map"
                  ></iframe>
                </p>
              </div>
            </motion.div>

            <div className="flex w-full flex-col gap-20 md:flex-row md:justify-end lg:w-2/3 xl:w-7/12">
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
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium capitalize text-black dark:text-white">
                  Nội dung
                </h4>

                <ul>
                  {footer_1.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="mb-3 inline-block capitalize hover:text-primary"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

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
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium capitalize text-black  dark:text-white">
                  sản phẩm
                </h4>

                <ul>
                  {footer_2.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
            className="animate_top"
          >
            <p>
              {new Date().getFullYear()} Bản quyền &copy; Công ty cổ phần DIC -
              Đồng Tiến
            </p>
          </motion.div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>
  );
};

export default Footer;

const footer_1 = [
  {
    title: "Trang chủ",
    link: "#",
  },
  {
    title: "Giới thiệu",
    link: "/about-us",
  },
  {
    title: "Quan hệ cổ đông",
    link: "qhcd",
  },
  {
    title: "Liên hệ",
    link: "contact-us",
  },
];

const footer_2 = [
  {
    title: "Đầu tư kinh doanh bất động sản",
    link: "dau-tu-kinh-doanh-bds",
  },
  {
    title: "Bê tông thương phẩm",
    link: "be-tong-thuong-pham",
  },
  {
    title: "Ống cống ly tâm",
    link: "ong-cong-ly-tam",
  },
  {
    title: "Cho thuê văn phòng",
    link: "cho-thue-van-phong",
  },
  {
    title: "Xây dựng dân dụng và công nghiệp",
    link: "xay-dung-dan-dung-va-cong-nghiep",
  },
];
