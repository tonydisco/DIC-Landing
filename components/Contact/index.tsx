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
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg"></div>
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
              className="animate_top w-full rounded-lg p-4  dark:border dark:border-strokedark dark:bg-black "
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
                  className="mt-5 rounded-[30px] p-0 md:absolute md:mt-0 md:p-5"
                  style={{
                    bottom: "0",
                    left: "0",
                    right: "0",
                    background: "rgba(255,255,255,0.8)",
                    color: "#000",
                    fontSize: "1.25rem",
                  }}
                >
                  <div className="mb-3 flex cursor-pointer items-center gap-2">
                    <div>
                      <HiBuildingOffice2 color={iconColor} size={26} />{" "}
                    </div>
                    <span>
                      Plot 17, Street 25B, Nhơn Trach II Industrial zone, Đong
                      Nai
                    </span>
                  </div>
                  <div className="mb-3 flex cursor-pointer items-center gap-2">
                    <div>
                      <MdPhoneIphone size={26} color={iconColor} />{" "}
                    </div>
                    <span>(84.61) 3521752 - 3521945</span>
                  </div>
                  <div className="mb-3 flex cursor-pointer items-center gap-2">
                    <FaFax size={24} color={iconColor} />{" "}
                    <span>(84.61) 3521953</span>
                  </div>
                  <div className="mb-3 flex cursor-pointer items-center gap-2">
                    <IoEarth size={26} color={iconColor} />{" "}
                    <span>http://dicdongtien.vn</span>
                  </div>
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

const iconColor = "#757693";
