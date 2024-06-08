// React Icon
import { RxTriangleRight } from "react-icons/rx";

//NOTE freetrail
export const FreeTrial = () => {
  return (
    <div id="trial" className="flex gap-1 items-center bg-[#E7B9B2] justify-center h-14 text-sm cursor-pointer">
      <h3 className="font-bold hover:underline">
        Choose up to 3 FREE trial sizes
        <span className="font-normal">
          {" "}
          with $30, $55, or $80* purchaes. *Terms apply. Code
        </span>{" "}
        BEAUTYFAVS
      </h3>
      <RxTriangleRight id="tringle" className="text-sm" />
    </div>
  );
};

// NOTE logo
const Logo = () => {
  return <p id="logo" className="tracking-widest font-medium text-2xl">SEPHORA</p>;
};
export default Logo;
