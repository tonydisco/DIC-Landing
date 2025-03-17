import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Giới thiệu chung
            </h1>
            <p>
              DIC Đồng Tiến là doanh nghiệp hàng đầu trong lĩnh vực cung cấp bê
              tông thương phẩm, ống cống ly tâm và vật liệu xây dựng tại Việt
              Nam. Với kinh nghiệm nhiều năm trong ngành, công ty không chỉ phục
              vụ các dự án xây dựng dân dụng và công nghiệp mà còn mở rộng sang
              lĩnh vực bất động sản và cho thuê văn phòng ...
            </p>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5">
                <Link href="/about-us">
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 capitalize text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    tìm hiểu thêm
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="animate_right  md:w-1/2 ">
            <div className="relative 2xl:-mr-7.5">
              <Image
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -left-11.5 bottom-[-60px]"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute -top-7 right-0 z-10"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="z-2 absolute -right-6.5 top-0"
              />
              <div className=" relative aspect-[700/444] w-full ">
                <Image
                  className="shadow-solid-light rounded-[12px]"
                  src="/images/hero/HERO.png"
                  alt="Hero"
                  fill
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
