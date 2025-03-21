import RelatedPost from "@/components/Blog/RelatedPost";
import { PureImage } from "@/components/Common/SectionHeader";
import { Metadata } from "next";

import bdsDicJsonData from "@/public/mockdata/bds-xd-nha-o-dic.json";

export const metadata: Metadata = {
  title: bdsDicJsonData.title,
  // other metadata
  description: bdsDicJsonData.desciption,
};

const SingleBlogPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-4 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {bdsDicJsonData.title}
              </h2>
              <div className="blog-details">
                <p>{bdsDicJsonData.desciption}</p>
                <div>
                  {bdsDicJsonData.gallery.map((item, index) => {
                    return (
                      <div key={index} className="mt-10 h-full w-full">
                        <PureImage
                          url={item.src}
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
            <RelatedPost exceptKey="BDS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
