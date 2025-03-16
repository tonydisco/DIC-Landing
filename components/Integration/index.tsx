"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader, { PureImage } from "../Common/SectionHeader";

const Integration = () => {
  return (
    <section>
      {listLayout.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="mx-auto min-h-[455px] max-w-c-1390 px-4 md:px-8 2xl:px-0"
            >
              <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
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
                className={`relative flex ${index % 2 ? "flex-row-reverse" : "row"} justify-between gap-20 p-4`}
              >
                <div className="relative w-full">
                  {
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
                  }
                  <p>{item.description}</p>
                  <div className="mt-10 text-blue-400">{`Xem chi tiết >>`}</div>

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
                        <div className="h-[35px] w-[35px] rounded-full bg-[#016BFF]"></div>
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
                    <PureImage url={item.image} className="rounded-lg" />
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
          </>
        );
      })}
    </section>
  );
};

export default Integration;

const listLayout = [
  {
    title: "Đầu tư kinh doanh bất động sản",
    description:
      "Nằm trong quy hoạch tổng thể của Thành phố Nhơn Trạch, khu Đô thị Phú Long Tân với diện tích 45 ha do công ty Cổ phần DIC Đồng Tiến làm chủ đầu tư đang được triển khai thực hiện",
    image: "/images/landing/KD-BDS.png",
    option: "left",
    subtitle:
      "Quy hoạch chi tiết 1/500 khu Đô Thị Phú Long Tân phương án lựa chọn.",
  },
  {
    title: "Bê tông thương phẩm",
    description:
      "Với 04 nhà máy bê tông thương phẩm có tổng công suất 420m3/h,các trang thiết bị nhập khẩu đồng bộ từ Hàn Quốc và Italia cùng đội xe bồn vận chuyển bê tông lên đến hàng trăm xe. DIC – Đồng Tiến có đủ năng lực cung cấp ra thị trường 500.000 m3 bê tông mỗi năm với các sản phẩm bê tông đa chủng loại từ M100 đến M600.",
    image: "/images/landing/BT-TP.png",
    option: "",
    subtitle: "Sản phẩm & năng lực xe máy thiết bị",
  },
  {
    title: "ống cống ly tâm",
    description:
      "Với dây chuyền sản xuất hiện đại, đội ngũ cán bộ công nhân lành nghề, hàng tháng DIC-Đồng Tiến cung cấp ra thị trường 5.000 m dài cống bê tông ly tâm chịu lực có đường kính từ 300mm đến 1.500mm.",
    image: "/images/landing/ONG-CONG.png",
    option: "",
    subtitle: "Sản phẩm & năng lực thiết bị",
  },
  {
    title: "cho thuê văn phòng",
    description:
      "Tọa lạc tại Khu công nghiệp Nhơn Trạch 2, huyện Nhơn Trạch, tỉnh Đồng Nai trên trục đường 25B có diện tích 20.000 m2, tòa nhà văn phòng của Công ty DIC Đồng Tiến với kiến trúc hiện đại, được đầu tư đầy đủ hạ tầng, kỹ thuật. Đây là nơi lý tưởng cho các nhà đầu tư, khách hàng đặt địa điểm văn phòng.",
    image: "/images/landing/CT-VP.png",
    option: "",
    subtitle: "",
  },
  {
    title: "xây dựng dân dụng và công nghiệp",
    description:
      "Trong định hướng phát triển trung và dài hạn, công ty tập trung vào các thị trường có tốc độ tăng trưởng kinh tế cao với nhu cầu xây dựng hàng năm rất lớn như TP Hồ Chí Minh, TP Biên Hòa. Công ty tiếp tục đầu tư các thiết bị hiện đại để nâng cao năng lực thi công song song với đào tạo đội ngũ nhân lực chuyên nghiệp có tay nghề cao để có thể thực hiện thi công các công trình có giá trị hàng trăm tỷ đồng.",
    image: "/images/landing/XD-DUC.png",
    option: "",
    subtitle: "",
  },
];
