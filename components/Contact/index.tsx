"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { PureImage } from "../Common/SectionHeader";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoEarth } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { FaFax } from "react-icons/fa";

const ContactUs = () => {
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
              <h2 className="mb-10 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                DIC-DONG TIEN JOINT-STOCK COMPANY
              </h2>

              <div className="relative h-full">
                <div className="relative h-full w-full ">
                  <PureImage
                    url="/images/contact-us/TTLH.png"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </div>
                <div
                  className="mt-5 rounded-[30px] md:absolute md:mt-0"
                  style={{
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    background: "rgba(255,255,255,0.8)",
                    color: "#000",
                    fontSize: "1.25rem",
                  }}
                >
                  <p className="mb-3 flex cursor-pointer items-center gap-2">
                    <HiBuildingOffice2 size={30} /> :{" "}
                    <span>
                      Plot 17, Street 25B, Nhơn Trach II Industrial zone, Đong
                      Nai
                    </span>
                  </p>
                  <p className="mb-3 flex cursor-pointer items-center gap-2">
                    <MdPhoneIphone size={30} /> :{" "}
                    <span>(84.61) 3521752 - 3521945</span>
                  </p>
                  <p className="mb-3 flex cursor-pointer items-center gap-2">
                    <FaFax size={25} /> : <span>(84.61) 3521953</span>
                  </p>
                  <p className="mb-3 flex cursor-pointer items-center gap-2">
                    <IoEarth size={28} /> : <span>http://dicdongtien.vn</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default ContactUs;
