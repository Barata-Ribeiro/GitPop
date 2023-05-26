import React from "react";

const NoRepo = ({ userData }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mx-auto mt-3 font-semibold text-shark-950">
        No repository found.
      </p>
      <p className="mt-4 text-shark-500">
        Check{" "}
        <a
          className="text-shark-950 hover:text-cinnabar-500 hover:underline"
          rel="noreferrer noopener"
          target="_blank"
          href={userData.html_url}
        >
          profile
        </a>{" "}
        for more information.
      </p>
    </div>
  );
};

export default NoRepo;
