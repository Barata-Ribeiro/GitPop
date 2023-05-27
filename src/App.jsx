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
import RepoCard from "./components/Profile/RepoCard";
import Footer from "./components/Footer/Footer";

const BASE_URL = "https://api.github.com/users";

const App = () => {
  const { data, request, loading, error } = useFetch();
  // These are the global state variables for the API
  const [userData, setUserData] = React.useState(null);
  const [reposData, setReposData] = React.useState(null);
  const [commitsData, setCommitsData] = React.useState(null);

  // Use the username from session storage if it exists, or use an empty string as default
  const [username, setUsername] = useSessionStorage("username", "");

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
    setUsername(inputValue);
  };

  if (error) return <ErrorPage error={error} />;

  // Iterates through the reposData array and sorts them by created date
  // if null, creates an empty array to avoid 'reposData is not iterable'
  const reposByDate = [...(reposData || [])].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  });

  return (
    <>
      <Header />
      <main className="h-full">
        <InputBar onSubmit={handleInputSubmit} />

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
                <ul className="flex flex-wrap justify-center items-center gap-6">
                  {reposByDate.map((repo) => (
                    <li key={repo.id}>
                      <a href="">
                        <RepoCard
                          gitRepoAuthor={repo.owner.login}
                          gitRepoAvatar={repo.owner.avatar_url}
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
                      </a>
                    </li>
                  ))}
                </ul>
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
