import RelatedPost from "@/components/Blog/RelatedPost";
import { PureImage } from "@/components/Common/SectionHeader";
import { Metadata } from "next";

const _description =
  "Sản phẩm & năng lực thiết bị với dây chuyền sản xuất hiện đại, đội ngũ cán bộ công nhân lành nghề, hàng tháng DIC-Đồng Tiến cung cấp ra thị trường 5.000m dài cống bê tông ly tâm chịu lực có đường kính từ 300mm đến 1.500mm ";
const _title = "Ống cống ly tâm";
export const metadata: Metadata = {
  title: _title,
  // other metadata
  description: _description,
};

const SingleBlogPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-4 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {_title}
              </h2>

              <div className="blog-details">
                <p>{_description}</p>

                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative w-full ">
                    <PureImage
                      url="/images/landing/ONG-CONG/ONG-CONG.png"
                      className="rounded"
                    />
                  </div>
                  <p className="mt-3 text-center italic">
                    Sản phẩm & năng lực thiết bị
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-[32%]">
            <RelatedPost exceptKey="OCLT" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
