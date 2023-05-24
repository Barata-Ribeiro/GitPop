import React from "react";
import BrandLogo from "../Global/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center border-t border-shark-900/5 py-10">
        <BrandLogo />
        <p className="mt-5 text-center text-sm leading-6 text-shark-700">
          © {currentYear} GitPop by Barata Ribeiro. All rights reserved.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-8 text-sm font-semibold leading-6 text-shark-700">
          <a href="/privacy-policy">Site Terms</a>
          <div className="h-4 w-px bg-shark-500/20"></div>
          <a href="/changelog">Repository</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
