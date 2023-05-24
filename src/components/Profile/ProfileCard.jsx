import React from "react";
import { GoBriefcase } from "react-icons/go";

const ProfileCard = ({ gitImgSrc, gitName, gitBio, gitForHire }) => {
  return (
    <div className="w-full sm:mt-14 mt-9 px-4 sm:px-6 lg:px-8 border-t border-shark-900/5 pt-10">
      <div className="flex flex-col gap-2 items-center">
        <div className="relative">
          <img
            src={gitImgSrc}
            className="w-32 h-32 object-cover rounded-full shadow-lg"
            alt="Avatar"
          />
          <div
            className={
              gitForHire
                ? "absolute bottom-0 left-6 flex justify-center items-center bg-cinnabar-500 px-2 py-1 w-fit text-xs font-semibold gap-2 text-cinnabar-50 rounded cursor-default"
                : "hidden"
            }
          >
            <GoBriefcase /> <span>For hire!</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{gitName}</h3>
        <p className="mt-2 text-sm text-gray-500">{gitBio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
