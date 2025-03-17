import RelatedPost from "@/components/Blog/RelatedPost";
import { PureImage } from "@/components/Common/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";

const metaObject = {
  title: "Bê tông thương phẩm",
  description: "Sản phẩm và năng lực xe máy thiết bị",
};

export const metadata: Metadata = {
  title: metaObject.title,

  // other metadata
  description: metaObject.description,
};

const SingleBlogPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {metaObject.title}
              </h2>
              <div className="blog-details">
                <p>
                  Với 04 nhà máy bê tông thương phẩm có tổng công suất
                  420m3/h,các trang thiết bị nhập khẩu đồng bộ từ Hàn Quốc và
                  Italia cùng đội xe bồn vận chuyển bê tông lên đến hàng trăm
                  xe. DIC – Đồng Tiến có đủ năng lực cung cấp ra thị trường
                  500.000 m3 bê tông mỗi năm với các sản phẩm bê tông đa chủng
                  loại từ M100 đến M600.
                </p>

                <div className="overflow-hidden ">
                  <div className="relative">
                    <PureImage
                      url="/images/landing/NANG-LUC/0.png"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                  <p className="mt-3 text-center italic">
                    {metaObject.description}
                  </p>
                </div>

                <div>
                  {Array.from({ length: 8 }).map((_, index) => {
                    return (
                      <div key={index} className="mt-10 h-full w-full">
                        <PureImage
                          url={`/images/landing/NANG-LUC/${index + 1}.png`}
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
            <RelatedPost exceptKey="BTTP" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
