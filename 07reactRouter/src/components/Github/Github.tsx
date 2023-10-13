import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData() as GithubData;
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center flex gap-8 items-center justify-center">
      <img src={data.avatar_url} alt="Github Pic" />
      Github user : {data.login}
      <br />
      Github followers: {data.followers}
    </div>
  );
};

export default Github;

const githubInfoLoader = async (): Promise<GithubData> => {
  const respone = await fetch("https://api.github.com/users/ofcljaved");
  return respone.json();
};
export { githubInfoLoader };
