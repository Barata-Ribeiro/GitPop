import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="grid h-screen px-4 bg-shark-50 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-shark-200 text-9xl">{error.status}</h1>

        <p className="text-2xl font-bold tracking-tight text-shark-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-shark-500">{error.message}</p>
        <a
          className="hover:text-cinnabar-500 hover:underline"
          href={error.documentation_url}
        >
          See documentation for more info.
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
