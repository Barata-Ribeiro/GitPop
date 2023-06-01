import React from "react";
import PropTypes from "prop-types";
import { GoStar } from "react-icons/go";

// Sub-component for each repository title and information
const RepoInfo = ({ title, info }) => (
  <div className="flex flex-col-reverse">
    <dt className="text-sm font-medium text-shark-600">{title}</dt>
    <dd className="text-xs text-shark-500">{info}</dd>
  </div>
);

// Sets the types of each repo card, for title and info
RepoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

const RepoCard = ({
  gitRepoLink,
  gitRepoTitle,
  gitRepoAuthor,
  gitRepoStars,
  gitRepoDesc,
  gitRepoDate,
  gitRepoUpdate,
  gitRepoLicense,
}) => {
  return (
    <>
      <a
        href={gitRepoLink}
        target="_blank"
        rel="noreferrer noopener"
        title={gitRepoTitle}
        className="relative block overflow-hidden rounded-lg border border-shark-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cinnabar-100 via-cinnabar-500 to-cinnabar-900"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-shark-900 sm:text-xl">
              {gitRepoTitle}
            </h3>
            <cite className="mt-1 text-xs font-medium text-shark-600">
              By {gitRepoAuthor}
            </cite>
          </div>

          <div className="flex items-center gap-2">
            <GoStar size={15} />
            <p>{gitRepoStars}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-shark-500">{gitRepoDesc}</p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <RepoInfo title="Published" info={gitRepoDate} />
          <RepoInfo title="Last Update" info={gitRepoUpdate} />
          <RepoInfo title="License" info={gitRepoLicense} />
        </dl>
      </a>
    </>
  );
};

RepoCard.propTypes = {
  gitRepoLink: PropTypes.string.isRequired,
  gitRepoTitle: PropTypes.string.isRequired,
  gitRepoAuthor: PropTypes.string.isRequired,
  gitRepoStars: PropTypes.number.isRequired,
  gitRepoDesc: PropTypes.string.isRequired,
  gitRepoDate: PropTypes.string.isRequired,
  gitRepoUpdate: PropTypes.string.isRequired,
  gitRepoLicense: PropTypes.string.isRequired,
};

export default RepoCard;
