import { getSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };

    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <h1 style={{ margin: "20px 0", textAlign: "center" }}>Dashboard page</h1>
  );
}
