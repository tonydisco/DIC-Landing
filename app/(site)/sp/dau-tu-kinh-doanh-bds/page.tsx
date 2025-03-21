import { Metadata } from "next";

import BlogItem from "@/components/Blog/BlogItem";
import bdsNhontrachJsonData from "@/public/mockdata/bds-kdc-tp-nhon-trach.json";
import bdsDICJsonData from "@/public/mockdata/bds-xd-nha-o-dic.json";
import bdsPhulongJsonData from "@/public/mockdata/bds-xd-nha-o-phu-long.json";

const metaObject = {
  title: "Đầu tư kinh doanh bất động sản",
  description: "Đầu tư kinh doanh bất động sản",
};
export const metadata: Metadata = {
  title: metaObject.title,
  // other metadata
  description: metaObject.description,
};

const SingleBlogPage = async () => {
  const blogBDS = [
    {
      title: bdsNhontrachJsonData.title,
      description: bdsNhontrachJsonData.desciption,
      gallery: bdsNhontrachJsonData.gallery,
      metadata: bdsNhontrachJsonData.desciption,
      _id: 1,
      mainImage: bdsNhontrachJsonData.gallery[0].src,
      linkTo: "/sp/dau-tu-kinh-doanh-bds/bds-kdc-tp-nhon-trach",
    },
    {
      title: bdsDICJsonData.title,
      description: bdsDICJsonData.desciption,
      gallery: bdsDICJsonData.gallery,
      metadata: bdsDICJsonData.desciption,
      _id: 2,
      mainImage: bdsDICJsonData.gallery[0].src,
      linkTo: "/sp/dau-tu-kinh-doanh-bds/xay-dung-nha-o-dic",
    },
    {
      title: bdsPhulongJsonData.title,
      description: bdsPhulongJsonData.desciption,
      gallery: bdsPhulongJsonData.gallery,
      metadata: bdsPhulongJsonData.desciption,
      _id: 3,
      mainImage: bdsPhulongJsonData.gallery[0].src,
      linkTo: "/sp/dau-tu-kinh-doanh-bds/quy-hoach-do-thi-phu-long",
    },
  ];

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogBDS.map((post, key) => (
            <BlogItem key={key} blog={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
