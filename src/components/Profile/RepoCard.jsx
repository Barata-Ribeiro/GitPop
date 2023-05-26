import React from "react";

const RepoCard = ({
  gitRepoTitle,
  gitRepoAuthor,
  gitRepoAvatar,
  gitRepoDesc,
  gitRepoDate,
  gitRepoUpdate,
  gitRepoLicense,
}) => {
  return (
    <div>
      <a
        href="#"
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

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Avatar"
              src={gitRepoAvatar}
              className="h-16 w-16 rounded-full object-cover shadow-lg"
            />
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
