"use client";

import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import { PureImage } from "../Common/SectionHeader";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, imageLight, id } = brand;

  return (
    <motion.a
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
      transition={{ duration: 1, delay: id }}
      viewport={{ once: true }}
      href={href}
      className="animate_top mx-w-full relative block h-20 w-[150px]"
    >
      <PureImage className="transition-all duration-300  " url={imageLight} />
    </motion.a>
  );
};

export default SingleBrand;
