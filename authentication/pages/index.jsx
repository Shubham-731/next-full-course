import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <h1 style={{ margin: "20px 0", textAlign: "center" }}>
      {session && status === "authenticated"
        ? `Welcome "${session.user.name}"`
        : "Home page"}
    </h1>
  );
}
