import RelatedPost from "@/components/Blog/RelatedPost";
import { Metadata } from "next";

import * as jsonData from "@/public/mockdata/tc-dbt.json";

export const metadata: Metadata = {
  title: jsonData.title,
  // other metadata
  description: jsonData.description[0],
};

const ThicongduongbetongPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-4 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {jsonData.title}
              </h2>
              <div className="blog-details">
                {jsonData.description.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
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

export default ThicongduongbetongPage;
