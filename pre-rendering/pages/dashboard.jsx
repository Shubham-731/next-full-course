import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function getDashboardData() {
      const analytics = await fetch("http://localhost:4000/dashboard").then(
        (res) => res.json()
      );
      setDashboardData(analytics);
      setLoading(false);
    }

    return () => {
      getDashboardData();
    };
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard data</h2>
      <div>
        <strong>Likes: </strong>
        {dashboardData.likes}
      </div>
      <div>
        <strong>Posts: </strong>
        {dashboardData.posts}
      </div>
      <div>
        <strong>Followers: </strong>
        {dashboardData.followers}
      </div>
      <div>
        <strong>Following: </strong>
        {dashboardData.following}
      </div>
    </div>
  );
};

export default Dashboard;
