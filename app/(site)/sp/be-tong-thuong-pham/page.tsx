import RelatedPost from "@/components/Blog/RelatedPost";
import { PureImage } from "@/components/Common/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bê tông thương phẩm",

  // other metadata
  description: "Sản phẩm và năng lực xe máy thiết bị",
};

const SingleBlogPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                Bê tông thương phẩm
              </h2>
              <p className="mb-10">Sản phẩm & năng lực xe máy thiết bị</p>
              <div className="blog-details">
                <p>
                  Với 04 nhà máy bê tông thương phẩm có tổng công suất
                  420m3/h,các trang thiết bị nhập khẩu đồng bộ từ Hàn Quốc và
                  Italia cùng đội xe bồn vận chuyển bê tông lên đến hàng trăm
                  xe. DIC – Đồng Tiến có đủ năng lực cung cấp ra thị trường
                  500.000 m3 bê tông mỗi năm với các sản phẩm bê tông đa chủng
                  loại từ M100 đến M600.
                </p>

                <div>
                  {Array.from({ length: 9 }).map((_, index) => {
                    return (
                      <div key={index} className="mt-10 h-full w-full">
                        <PureImage
                          url={`/images/landing/NANG-LUC/${index + 1}.png`}
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
