import RelatedPost from "@/components/Blog/RelatedPost";
import { PureImage } from "@/components/Common/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Đầu tư kinh doanh bất động sản",

  // other metadata
  description:
    "Quy hoạch chi tiết 1/500 khu Đô Thị Phú Long Tân phương án lựa chọn.",
};

const SingleBlogPage = async () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden ">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={"/images/landing/BDS/BDS.png"}
                    alt="Kobe Steel plant that supplied"
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
                <p className="mt-3 text-center italic">
                  Quy hoạch chi tiết 1/500 khu Đô Thị Phú Long Tân phương án lựa
                  chọn.
                </p>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                Đầu tư kinh doanh bất động sản
              </h2>

              <div className="blog-details">
                <p>
                  Nằm trong quy hoạch tổng thể của Thành phố Nhơn Trạch, khu Đô
                  thị Phú Long Tân với diện tích 45 ha do công ty Cổ phần DIC
                  Đồng Tiến làm chủ đầu tư đang được triển khai thực hiện. Đây
                  là một trong những khu Đô thị có vị trí địa lý hết sức thuận
                  lợi. Với ba mặt giáp đường, đặc biệt là nằm trên trục đường
                  chính của tuyến đường cao tốc nối liền Thành phố Hồ Chí Minh
                  với Thành phố Nhơn Trạch, cách trung tâm thành phố Hồ Chí Minh
                  20 km, trung tâm thành phố Nhơn Trạch 5 km, tương lai không xa
                  khi Tam Phước trở thành trung tâm hành chính của tỉnh Đồng
                  Nai, Sân bay Quốc tế Long Thành được xây dựng đi vào hoạt
                  động, từ khu đô thị này theo tuyến đường cao tốc Thành phố Hồ
                  Chí Minh – Dầu Giây chỉ với 15 km đường bộ.Bên cạnh đó là khu
                  đô thị du lịch sinh thái Đại Phước có diện tích 464 ha, khu du
                  lịch sinh thái Long Tân có diện tích 330 ha do DIC Corp làm
                  Chủ đầu tư và DIC Đồng Tiến đang tham gia xây dựng.
                </p>

                <div>
                  {Array.from({ length: 8 }).map((_, index) => {
                    return (
                      <div key={index} className="mt-10 h-full w-full">
                        <PureImage
                          url={`/images/landing/BDS/${index + 1}.png`}
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
