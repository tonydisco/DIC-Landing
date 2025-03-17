"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
              className="animate_top w-1/2 lg:w-1/4"
            >
              <a href="/" className="relative">
                {/* <h1 className="text-[42px] font-bold">DIC</h1> */}
                <Image
                  width={65}
                  height={65}
                  sizes="(max-width: 768px) 100vw"
                  src="/images/logo/LOGO.png"
                  alt="logo"
                />
              </a>

              <p className="mb-10 mt-5">
                Lô 17, đường 25B, Khu công nghiệp Nhơn Trạch II, Tỉnh Đồng Nai
              </p>

              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                contact
              </p>
              <span className="text-itemtitle font-medium text-black dark:text-white">
                info@dicdongtien.vn
              </span>
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
    link: "#",
  },
  {
    title: "Quan hệ cổ đông",
    link: "#",
  },
  {
    title: "Liên hệ",
    link: "#",
  },
];

const footer_2 = [
  {
    title: "Đầu tư kinh doanh bất động sản",
    link: "#",
  },
  {
    title: "Bê tông thương phẩm",
    link: "#",
  },
  {
    title: "Ống cống ly tâm",
    link: "#",
  },
  {
    title: "Cho thuê văn phòng",
    link: "#",
  },
  {
    title: "Xây dựng dân dụng và công nghiệp",
    link: "#",
  },
];
