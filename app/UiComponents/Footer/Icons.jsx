import { FaFacebookF } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Icons = () => {
  return (
    <div className="flex gap-4">
      <div className=" hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light ">
        <FaFacebookF size={16} />
      </div>

      <div className="hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light ">
        <BsTwitterX size={16} />
      </div>

      <div className="hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light ">
        <FaYoutube size={16} />
      </div>

      <div className="hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light ">
        <TiSocialInstagram size={16} />
      </div>
    </div>
  );
};

export default Icons;
