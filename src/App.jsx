import React from "react";
import useFetch from "./components/Global/useFetch";
import BrandLogo from "./components/Global/BrandLogo";
import InputBar from "./components/Global/InputBar";
import ProfileCard from "./components/Profile/ProfileCard";
import ProfileNumbers from "./components/Profile/ProfileNumbers";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { data, request, loading, error } = useFetch();
  let username;

  React.useEffect(() => {
    async function fetchData() {
      const { response1, json1 } = await request(
        `https://api.github.com/users/${username}`
      );
      const { response2, json2 } = await request(
        `https://api.github.com/users/${username}/repos`
      );
      const { response3, json3 } = await request(
        `https://api.github.com/search/commits?q=author:${username}`
      );
    }
    fetchData();
  }, [request, username]);

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        <BrandLogo />
        <main className="h-full">
          <InputBar />
          <ProfileCard />
          <ProfileNumbers />
        </main>
        <Footer />
      </>
    );
  else return null;
};

export default App;
