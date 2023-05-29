import React from "react";
import { GoStar } from "react-icons/go";

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
    <div>
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

            <p className="mt-1 text-xs font-medium text-shark-600">
              By {gitRepoAuthor}
            </p>
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
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-shark-600">Published</dt>
            <dd className="text-xs text-shark-500">{gitRepoDate}</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-shark-600">Last Update</dt>
            <dd className="text-xs text-shark-500">{gitRepoUpdate}</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-shark-600">License</dt>
            <dd className="text-xs text-shark-500">{gitRepoLicense}</dd>
          </div>
        </dl>
      </a>
    </div>
  );
};

export default RepoCard;
