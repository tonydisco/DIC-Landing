"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type HeaderInfo = {
  title?: string;
  subtitle: string;
  description?: string;
};

interface ILogoProps {
  url?: string;
  mode?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
  style?: React.CSSProperties;
}

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { subtitle } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <div className="relative">
          <h2 className="relative top-2 mx-auto mb-4 text-3xl font-bold capitalize text-white dark:text-white xl:text-itemtitle">
            {subtitle}
          </h2>
          <div className="absolute -bottom-[12px] left-0 right-0 top-0 -z-1 w-full">
            <PureImage
              url="/images/landing/BANNER-TITLE.png"
              style={{
                width: "100%",
              }}
              mode="fill"
            />
          </div>
        </div>
        {/* <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p> */}
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

const PureImage: React.FC<ILogoProps> = ({ url, mode, className, style }) => {
  return (
    <Image
      priority
      src={url ?? ""}
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: mode ?? "contain",
        ...style,
      }}
      alt={`${url}`}
      className={className}
    />
  );
};

export { PureImage };

export default SectionHeader;
