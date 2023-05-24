import React from "react";
import { BsFillPersonCheckFill, BsFillPersonLinesFill } from "react-icons/bs";
import { GoGitCommit, GoRepo } from "react-icons/go";

const ProfileNumbers = ({
  gitFollowers,
  gitFollowing,
  gitRepos,
  gitCommits,
}) => {
  return (
    <div className="w-full sm:mt-14 mt-9 px-4 sm:px-6 lg:px-8 border-t border-shark-900/5 pt-10">
      <section className="mb-32 text-gray-800 text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
          <div className="mb-12 lg:mb-0 relative">
            <BsFillPersonLinesFill className="w-12 h-12 text-cinnabar-600 mx-auto mb-6" />
            <h5 className="text-lg text-cinnabar-600 font-bold mb-4">
              {gitFollowers}
            </h5>
            <h6 className="font-medium text-shark-500">Followers</h6>
            <hr className="absolute right-0 top-0 w-px bg-shark-100 h-full hidden lg:block" />
          </div>

          <div className="mb-12 lg:mb-0 relative">
            <BsFillPersonCheckFill className="w-12 h-12 text-cinnabar-600 mx-auto mb-6" />
            <h5 className="text-lg text-cinnabar-600 font-bold mb-4">
              {gitFollowing}
            </h5>
            <h6 className="font-medium text-shark-500">Following</h6>
            <hr className="absolute right-0 top-0 w-px bg-shark-100 h-full hidden lg:block" />
          </div>

          <div className="mb-12 md:mb-0 relative">
            <GoRepo className="w-12 h-12 text-cinnabar-600 mx-auto mb-6" />
            <h5 className="text-lg text-cinnabar-600 font-bold mb-4">
              {gitRepos}
            </h5>
            <h6 className="font-medium text-shark-500">Public Repos</h6>
            <hr className="absolute right-0 top-0 w-px bg-shark-100 h-full hidden lg:block" />
          </div>

          <div className="relative">
            <GoGitCommit className="w-12 h-12 text-cinnabar-600 mx-auto mb-6" />
            <h5 className="text-lg text-cinnabar-600 font-bold mb-4">
              {gitCommits}
            </h5>
            <h6 className="font-medium text-shark-500 mb-0">Public Commits</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileNumbers;
