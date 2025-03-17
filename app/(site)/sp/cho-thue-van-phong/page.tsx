import RelatedPost from "@/components/Blog/RelatedPost";
import { PureImage } from "@/components/Common/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";

const metadataObject = {
  title: "Cho thuê văn phòng",
  description: "",
};
export const metadata: Metadata = {
  title: metadataObject.title,
  // other metadata
  description: "",
};

const SingleBlogPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {metadataObject.title}
              </h2>

              <div className="blog-details">
                <p>
                  Tọa lạc tại Khu công nghiệp Nhơn Trạch 2, huyện Nhơn Trạch,
                  tỉnh Đồng Nai trên trục đường 25B có diện tích 20.000 m2, tòa
                  nhà văn phòng của Công ty DIC Đồng Tiến với kiến trúc hiện
                  đại, được đầu tư đầy đủ hạ tầng, kỹ thuật. Đây là nơi lý tưởng
                  cho các nhà đầu tư, khách hàng đặt địa điểm văn phòng.
                </p>
                <div className="overflow-hidden ">
                  <div className="relative">
                    <PureImage
                      url="/images/landing/CT-VP/1.png"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </div>

                <div>
                  {Array.from({ length: 4 }).map((_, index) => {
                    return (
                      <div key={index} className="mt-10 h-full w-full">
                        <PureImage
                          url={`/images/landing/CT-VP/${index + 2}.png`}
                          style={{
                            borderRadius: "12px",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-[32%]">
            <RelatedPost exceptKey="CTVP" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
