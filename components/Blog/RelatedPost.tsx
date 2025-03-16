import Link from "next/link";
import { PureImage } from "../Common/SectionHeader";
import BlogData from "./blogData";

const RelatedPost = async ({ exceptKey }: { exceptKey?: string }) => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Bài viết liên quan
      </h4>
      <div>
        {BlogData.filter((item) => item.key !== exceptKey).map((post) => (
          <div
            className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
            key={post._id}
          >
            <div className="relative h-18 w-[120px]">
              {post.mainImage ? (
                <PureImage mode="cover" url={post.mainImage} />
              ) : (
                "No image"
              )}
            </div>
            <h5 className="text-md flex-1 font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={`${post.linkTo}`}>{post.title.slice(0, 40)}...</Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
