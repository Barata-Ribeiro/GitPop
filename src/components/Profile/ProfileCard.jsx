import React from "react";
import { GoBriefcase } from "react-icons/go";

const ProfileCard = ({
  gitImgSrc,
  gitName,
  gitBio,
  gitForHire,
  gitLocation,
  gitMemberSince,
}) => {
  // Object with the types of date
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Creates a new Date using the gitMemberSince from the API
  const memberSinceDate = new Date(gitMemberSince);
  // Formats the date using the date options and american format
  const formattedDate = memberSinceDate.toLocaleDateString(
    "en-US",
    dateOptions
  );
  // Puts the formatted date into a template string
  const formattedDateString = `${formattedDate}`;

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
        <div className="flex flex-wrap justify-center items-center">
          <p>{formattedDateString}</p>
          <span className="mx-2 text-shark-200">|</span>
          <p>{gitLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
