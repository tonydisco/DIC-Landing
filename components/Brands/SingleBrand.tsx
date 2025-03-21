import { Brand } from "@/types/brand";
import { PureImage } from "../Common/SectionHeader";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { imageLight, styleExtend } = brand;

  return (
    <div
      className={`animate_top mx-w-full relative block`}
      style={{
        width: "100%",
        ...styleExtend,
      }}
    >
      <PureImage
        className="px-7 transition-all duration-300"
        url={imageLight}
      />
    </div>
  );
};

export default SingleBrand;
