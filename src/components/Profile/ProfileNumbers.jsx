import React from "react";
import PropTypes from "prop-types";
import { BsFillPersonCheckFill, BsFillPersonLinesFill } from "react-icons/bs";
import { GoGitCommit, GoRepo } from "react-icons/go";

// Sub-component for each profile item
const ProfileItem = ({ Icon, number, title }) => (
  <div className="lg:pr-6 mb-12 lg:mb-0 relative">
    <Icon className="w-12 h-12 text-cinnabar-600 mx-auto mb-6" />
    <h5 className="text-lg text-cinnabar-600 font-bold mb-4">{number}</h5>
    <h6 className="font-medium text-shark-500">{title}</h6>
    <hr className="absolute right-0 top-0 w-px bg-shark-100 h-full hidden lg:block" />
  </div>
);

// Sets the types of each profile item
ProfileItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const ProfileNumbers = ({
  gitFollowers,
  gitFollowing,
  gitRepos,
  gitCommits,
}) => {
  const data = [
    { Icon: BsFillPersonLinesFill, number: gitFollowers, title: "Followers" },
    { Icon: BsFillPersonCheckFill, number: gitFollowing, title: "Following" },
    { Icon: GoRepo, number: gitRepos, title: "Public Repos" },
    { Icon: GoGitCommit, number: gitCommits, title: "Public Commits" },
  ];

  return (
    <div className="w-full sm:px-6 lg:px-8 pt-10">
      <section className="text-gray-800 text-center">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {data.map((item) => (
            <ProfileItem key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Sets the types of each profile number as numbers
ProfileNumbers.propTypes = {
  gitFollowers: PropTypes.number.isRequired,
  gitFollowing: PropTypes.number.isRequired,
  gitRepos: PropTypes.number.isRequired,
  gitCommits: PropTypes.number.isRequired,
};

export default ProfileNumbers;
