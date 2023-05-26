import React from "react";
import BrandLogo from "../Global/BrandLogo";

const Header = () => {
  return (
    <>
      <BrandLogo />
      <div className="flex justify-center items-center w-full my-6">
        <p className="text-center text-2xl text-shark-950 max-w-2xl">
          Welcome to <span className="font-rubik text-shark-950">GitPop</span>,
          where popularity meets code! Discover the hottest repositories for any{" "}
          <span className="font-semibold">GitHub</span> user and explore your
          own coding prowess. Get ready to dive into the world of trending
          projects and unleash your developer potential.{" "}
          <span className="block text-cinnabar-500 font-bold">
            Let&lsquo;s Git started!
          </span>
        </p>
      </div>
    </>
  );
};

export default Header;
