import React from "react";
import { IoClose } from "react-icons/io5";

const Terms = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-shark-50 text-shark-950 md:rounded-lg overflow-auto max-w-full md:max-w-4xl mx-auto shadow-lg z-50 max-h-full">
        {/* HEADER */}
        <div className="flex justify-between items-center p-2 sm:p-6">
          <h2 className="text-lg sm:text-2xl font-bold">Terms of Service</h2>
          <button onClick={closeModal}>
            <IoClose size={20} className="sm:text-xl" />
          </button>
        </div>
        <hr />

        {/* TEXT */}
        <div className="p-2 sm:px-6 sm:py-4">
          <h2 className="text-lg font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using GitPop (&ldquo;Service&rdquo;), you accept
            and agree to be bound by the terms and provision of this agreement.
            If you do not agree to abide by these terms, please do not use the
            Service.
          </p>

          <h2 className="text-lg font-bold mt-4 mb-4">2. Our Service</h2>
          <p>
            GitPop provides a client-side application that queries the GitHub
            API and shows the most popular repositories for a given user as
            their profile info. This service is intended for personal and
            non-commercial use.
          </p>

          <h2 className="text-lg font-bold mt-4 mb-4">
            3. Intellectual Property
          </h2>
          <p>
            The GitPop brand and logo are owned by the creator. The content of
            the Service, excluding data from the GitHub API, is the property of
            GitPop and is protected by international copyright, trademark, and
            other intellectual property rights.
          </p>

          <h2 className="text-lg font-bold mt-4 mb-4">4. GitHub API Terms</h2>
          <p>
            GitPop uses the GitHub API in its Service. By using the Service,
            users agree to be bound by the GitHub Terms of Service.
          </p>

          <h2 className="text-lg font-bold mt-4 mb-4">5. Changes to Terms</h2>
          <p>
            GitPop reserves the right to modify these terms of service at any
            time. It is your responsibility to regularly check for any changes.
            If you continue to use the Service after changes are posted, you
            agree to be legally bound by the updated terms of service.
          </p>

          <h2 className="text-lg font-bold mt-4 mb-4">6. Disclaimer</h2>
          <p>
            GitPop is provided on an &ldquo;as is&rdquo; basis. GitPop disclaims
            all warranties, whether express or implied, including without
            limitation to the implied warranties of merchantability, fitness for
            a particular purpose, and non-infringement. GitPop does not warrant
            that the service will be uninterrupted, secure, or error-free.
          </p>
        </div>

        {/* FOOTER */}
        <hr />
        <div className="px-2 py-1 sm:px-6 sm:py-4 flex sm:justify-end justify-center">
          <button
            onClick={closeModal}
            className="inline-block px-7 py-3 bg-gradient-to-r from-cinnabar-400 to-cinnabar-600 text-shark-50 font-semibold text-sm leading-snug uppercase rounded shadow-md hover:bg-gradient-to-r hover:from-cinnabar-500 hover:to-cinnabar-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gradient-to-r active:from-cinnabar-600 active:to-cinnabar-800 active:shadow-lg disabled:bg-gradient-to-r disabled:from-cinnabar-100 disabled:to-cinnabar-300 disabled:text-cinnabar-700 transition duration-150 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Terms;
