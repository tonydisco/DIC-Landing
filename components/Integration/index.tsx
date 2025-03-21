"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader, { PureImage } from "../Common/SectionHeader";
import listLayout from "../Blog/blogData";

const Integration = () => {
  return (
    <section>
      {listLayout.map((item, index) => {
        return (
          <div key={item.key}>
            <div className="mx-auto min-h-[455px] max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative -z-1 mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
                <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
                  <Image
                    width={1200}
                    height={400}
                    sizes="(max-width: 768px) 100vw"
                    src="/images/shape/shape-dotted-light.svg"
                    alt="Dotted"
                    className="dark:hidden"
                    style={{ position: "static" }}
                  />
                  <Image
                    fill
                    src="/images/shape/shape-dotted-dark.svg"
                    alt="Dotted"
                    className="hidden dark:block"
                  />
                </div>
              </div>
              <div
                className={`relative flex ${index % 2 ? "flex-row-reverse" : "row"} flex-wrap justify-between gap-20 md:flex-nowrap`}
              >
                <div className="relative w-full">
                  <div className="mx-auto max-w-c-1390 ">
                    {/* <!-- Section Title Start --> */}
                    <SectionHeader
                      headerInfo={{
                        subtitle: item.title,
                        description: item.subtitle,
                      }}
                    />
                    {/* <!-- Section Title End --> */}
                  </div>
                  <p className="mt-10 indent-6">{item.metadata}</p>
                  <div className="relative z-10 mt-15 text-center md:text-left">
                    <a
                      href={item.linkTo}
                      className=" text-blue-400"
                    >{`Xem chi tiết >>`}</a>
                  </div>

                  <div className="absolute bottom-0 w-full">
                    <div className="relative flex flex-wrap justify-around gap-y-10">
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
                        className="animate_top "
                      >
                        <div className="h-[35px] w-[35px] rounded-full bg-[#016BFF]" />
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
                        className="animate_top w-1/6"
                      >
                        <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
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
                        className="animate_top w-1/6"
                      />

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
                        className="animate_top w-1/6"
                      >
                        <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
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
                        className="animate_top w-1/6"
                      >
                        <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="relative h-full w-full">
                  <div className="h-full w-full">
                    <PureImage url={item.mainImage} className="rounded-lg" />
                    <div className="mt-2 text-center italic opacity-[0.85]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index !== listLayout.length - 1 && (
              <div className="py-8 text-center opacity-[0.5]">
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                -
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Integration;
