import React from "react";
import useFetch from "./components/Global/Hooks/useFetch";
import useSessionStorage from "./components/Global/Hooks/useSessionStorage";
import LoadingAnim from "./components/Global/LoadingAnim";
import ErrorPage from "./components/Global/ErrorPage";
import Header from "./components/Header/Header";
import InputBar from "./components/Global/InputBar";
import ProfileCard from "./components/Profile/ProfileCard";
import ProfileNumbers from "./components/Profile/ProfileNumbers";
import NoRepos from "./components/Profile/NoRepo";
import RadioFilter from "./components/Global/RadioFilter";
import RepoCard from "./components/Profile/RepoCard";
import { GoArrowDown } from "react-icons/go";
import Footer from "./components/Footer/Footer";

const BASE_URL = "https://api.github.com/users";
const DEFAULT_REPOS_TO_SHOW = 4;

const App = () => {
  const { data, request, loading, error } = useFetch();
  // These are the global state variables for the API
  const [userData, setUserData] = React.useState(null);
  const [reposData, setReposData] = React.useState(null);
  const [commitsData, setCommitsData] = React.useState(null);
  const [filter, setFilter] = React.useState("stars");

  // Use the username from session storage if it exists, or use an empty string as default
  const [username, setUsername] = useSessionStorage("username", "");

  // Add new state to control number of repos to show
  const [reposToShow, setReposToShow] = React.useState(4);

  // Call fetchUserData whenever username changes
  React.useEffect(() => {
    async function fetchUserData() {
      // Only attempt to fetch data if a username is set
      if (username) {
        try {
          const urls = [
            `${BASE_URL}/${username}`,
            `${BASE_URL}/${username}/repos`,
            `https://api.github.com/search/commits?q=author:${username}&sort=author-date&order=desc&page=1`,
          ];
          const allData = await Promise.all(
            urls.map((url) =>
              request(url).catch((error) =>
                console.error(`Error in ${url}: `, error)
              )
            )
          );

          setUserData(allData[0]?.json);
          setReposData(allData[1]?.json);
          setCommitsData(allData[2]?.json);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
    fetchUserData();
  }, [request, username]);

  // Function to handle input submission, sets the username and updates session storage
  const handleInputSubmit = (inputValue) => {
    // Check if the username has changed before setting
    if (inputValue !== username) setUsername(inputValue);
  };

  // Function to handle loading more repos
  const showMoreRepos = () => {
    setReposToShow(reposToShow + DEFAULT_REPOS_TO_SHOW);
  };

  if (error) return <ErrorPage error={error} />;

  // let's filter the repos based on the filter selected! =D
  const filteredRepos = React.useMemo(() => {
    if (reposData) {
      switch (filter) {
        case "last created":
          return [...reposData].sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateB - dateA;
          });
        case "last updated":
          return [...reposData].sort((a, b) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);
            return dateB - dateA;
          });
        case "stars":
          return [...reposData].sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          );
        default:
          return reposData;
      }
    } else {
      return [];
    }
  }, [reposData, filter]);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-9 px-4 sm:px-6 lg:px-8">
        <Header />
        <InputBar onSubmit={handleInputSubmit} />
      </div>
      <main className="h-full flex flex-col justify-center items-center my-9 px-4">
        {/* PROFILE */}
        {loading ? (
          <LoadingAnim />
        ) : (
          userData &&
          reposData &&
          commitsData && (
            <>
              <ProfileCard
                gitImgSrc={userData.avatar_url}
                gitName={userData.name}
                gitBio={userData.bio}
                gitForHire={userData.hireable}
                gitLocation={userData.location}
                gitMemberSince={userData.created_at}
              />
              <ProfileNumbers
                gitFollowers={userData.followers}
                gitFollowing={userData.following}
                gitRepos={reposData.length}
                gitCommits={commitsData.total_count}
              />

              {/* REPOSITORIES */}
              {reposData.length === 0 ? (
                <NoRepos userData={userData} />
              ) : (
                <>
                  {/* FILTER */}
                  <RadioFilter
                    options={["last created", "last updated", "stars"]}
                    value={filter}
                    setValue={setFilter}
                  />
                  {/* REPO CARDS */}
                  <ul className="flex flex-wrap justify-center items-center gap-6">
                    {filteredRepos.slice(0, reposToShow).map((repo) => (
                      <li key={repo.id}>
                        <RepoCard
                          gitRepoLink={repo.html_url}
                          gitRepoAuthor={repo.owner.login}
                          gitRepoStars={repo.stargazers_count}
                          gitRepoTitle={repo.name}
                          gitRepoDesc={repo.description}
                          gitRepoDate={new Date(
                            repo.created_at
                          ).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                          gitRepoUpdate={new Date(
                            repo.updated_at
                          ).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                          gitRepoLicense={
                            repo.license ? repo.license.name : "No license"
                          }
                        />
                      </li>
                    ))}
                  </ul>
                  {reposToShow < filteredRepos.length && (
                    <button
                      className="flex justify-center items-center mt-8 gap-2 px-7 py-3 bg-gradient-to-r from-cinnabar-400 to-cinnabar-600 text-shark-50 font-semibold text-sm leading-snug uppercase rounded shadow-md hover:bg-gradient-to-r hover:from-cinnabar-500 hover:to-cinnabar-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gradient-to-r active:from-cinnabar-600 active:to-cinnabar-800 active:shadow-lg disabled:bg-gradient-to-r disabled:from-cinnabar-100 disabled:to-cinnabar-300 disabled:text-cinnabar-700 transition duration-150 ease-in-out"
                      onClick={showMoreRepos}
                    >
                      Load More <GoArrowDown />
                    </button>
                  )}
                </>
              )}
            </>
          )
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
