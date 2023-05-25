import React from "react";
import useFetch from "./components/Global/useFetch";
import useSessionStorage from "./components/Global/useSessionStorage";
import BrandLogo from "./components/Global/BrandLogo";
import LoadingAnim from "./components/Global/LoadingAnim";
import ErrorPage from "./components/Global/ErrorPage";
import InputBar from "./components/Global/InputBar";
import ProfileCard from "./components/Profile/ProfileCard";
import ProfileNumbers from "./components/Profile/ProfileNumbers";
import RepoCard from "./components/Profile/RepoCard";
import Footer from "./components/Footer/Footer";

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
          const { response: responseUser, json: jsonUser } = await request(
            `https://api.github.com/users/${username}`
          );

          const { response: responseRepos, json: jsonRepos } = await request(
            `https://api.github.com/users/${username}/repos`
          );

          const { response: responseCommits, json: jsonCommits } =
            await request(
              `https://api.github.com/search/commits?q=author:${username}&sort=author-date&order=desc&page=1`
            );

          setUserData(jsonUser);
          setReposData(jsonRepos);
          setCommitsData(jsonCommits);
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

  return (
    <>
      <BrandLogo />
      <main className="h-full">
        <InputBar onSubmit={handleInputSubmit} />
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
              <div className="flex flex-wrap justify-center items-center gap-6">
                <RepoCard />
                <RepoCard />
                <RepoCard />
                <RepoCard />
              </div>
            </>
          )
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
