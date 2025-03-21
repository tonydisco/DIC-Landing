"use client";
import { useWindowDimensions } from "@/hooks/useDimension";
import { VIEW_PORT } from "@/utils";
import { useMemo } from "react";
import Slider from "react-slick";
import brandData from "./brandData";
import SingleBrand from "./SingleBrand";

const Brands = () => {
  const { width } = useWindowDimensions();

  const slidesToShow = useMemo(() => {
    if (width < VIEW_PORT.MOBILE) {
      return {
        quantity: 2,
        size: width / 3,
      };
    }
    if (width < 996) {
      return {
        quantity: 3,
        size: width / 4,
      };
    }
    if (width >= 996 && width < 1540) {
      return {
        quantity: 4,
        size: width / 5,
      };
    }
    if (width >= 1540 && width < 1920) {
      return {
        quantity: 5,
        size: width / 6,
      };
    }
    if (width >= 1920) {
      return {
        quantity: 6,
        size: width / 8,
      };
    }
    return {
      quantity: 4,
      size: width / 3,
    };
  }, [width]);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow.quantity,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390">
          <div className="slider-container slide-customize">
            <Slider {...settings}>
              {brandData.map((brand) => {
                const isSikaBrand = brand.id === 104;
                return (
                  <SingleBrand
                    brand={{
                      ...brand,
                      styleExtend: {
                        height: isSikaBrand ? 100 : 50,
                      },
                    }}
                    key={brand.id}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
