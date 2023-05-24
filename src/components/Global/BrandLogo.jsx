import React from "react";
import { IoRocketSharp } from "react-icons/io5";

const BrandLogo = () => {
  return (
    <>
      <div className="flex justify-center items-center p-6">
        <IoRocketSharp
          className="bg-orange p-[6px] rounded-ss-xl rounded-ee-xl mr-3"
          color="white"
          size={36}
        />
        <h1 className="font-rubik text-darkBlack text-4xl">GitPop</h1>
      </div>
    </>
  );
};

export default BrandLogo;
