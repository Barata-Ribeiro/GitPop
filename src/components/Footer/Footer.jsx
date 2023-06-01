import React from "react";
import BrandLogo from "../Global/BrandLogo";
import Terms from "./Terms";

const Footer = () => {
  const [modal, showModal] = React.useState(false);
  const currentYear = new Date().getFullYear();

  const handleModal = () => {
    showModal(!modal);
  };

  return (
    <footer className="w-full sm:mt-14 mt-9 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center border-t border-shark-900/5 py-10">
        <BrandLogo />
        <p className="mt-5 text-center text-sm leading-6 text-shark-700">
          © {currentYear} GitPop by Barata Ribeiro. All rights reserved.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-8 text-sm font-semibold leading-6 text-shark-700">
          <span className="cursor-pointer" onClick={handleModal}>
            Site Terms
          </span>
          <div className="h-4 w-px bg-shark-500/20"></div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Barata-Ribeiro/GitPop"
          >
            Repository
          </a>
        </div>
      </div>
      {modal && <Terms closeModal={handleModal} />}
    </footer>
  );
};

export default Footer;
