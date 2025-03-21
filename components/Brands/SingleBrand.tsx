import { Brand } from "@/types/brand";
import { PureImage } from "../Common/SectionHeader";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { imageLight, wExtend } = brand;

  return (
    <div
      className={`animate_top mx-w-full relative block h-15`}
      style={{ maxWidth: wExtend ?? "180px" }}
    >
      <PureImage className="transition-all duration-300" url={imageLight} />
    </div>
  );
};

export default SingleBrand;
