import useSWR from "swr";

async function fetchData() {
  const analytics = await fetch("http://localhost:4000/dashboard").then((res) =>
    res.json()
  );

  return analytics;
}

const DashboardSWR = () => {
  const { error, data } = useSWR("dashboard", fetchData);

  if (error) return <h1>Error occured</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>Dashboard data</h2>
      <div>
        <strong>Likes: </strong>
        {data.likes}
      </div>
      <div>
        <strong>Posts: </strong>
        {data.posts}
      </div>
      <div>
        <strong>Followers: </strong>
        {data.followers}
      </div>
      <div>
        <strong>Following: </strong>
        {data.following}
      </div>
    </div>
  );
};
export default DashboardSWR;
