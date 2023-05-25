import React from "react";
import useFetch from "./components/Global/useFetch";
import BrandLogo from "./components/Global/BrandLogo";
import InputBar from "./components/Global/InputBar";
import ProfileCard from "./components/Profile/ProfileCard";
import ProfileNumbers from "./components/Profile/ProfileNumbers";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { data, request, loading, error } = useFetch();
  const [username, setUsername] = React.useState("");
  const [fetchData, setFetchData] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [reposData, setReposData] = React.useState(null);
  const [commitsData, setCommitsData] = React.useState(null);

  React.useEffect(() => {
    async function fetchUserData() {
      if (fetchData) {
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
  }, [fetchData, request, username]);

  const handleInputSubmit = (inputValue) => {
    setUsername(inputValue);
    setFetchData(true);
  };

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;
  return (
    <>
      <BrandLogo />
      <main className="h-full">
        <InputBar onSubmit={handleInputSubmit} />
        {userData && reposData && commitsData && (
          <>
            <ProfileCard
              gitImgSrc={userData.avatar_url}
              gitName={userData.name}
              gitBio={userData.bio}
              gitForHire={userData.hireable}
            />
            <ProfileNumbers
              gitFollowers={userData.followers}
              gitFollowing={userData.following}
              gitRepos={reposData.length}
              gitCommits={commitsData.total_count}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
