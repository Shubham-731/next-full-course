import { getSession } from "next-auth/react";

export default function Blog({ data }) {
  return (
    <div>
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>Blog page</h1>
      <p style={{ margin: "5px 0", textAlign: "center" }}>{data}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${process.env.DEV_URL}/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: `${
        session ? "List of personalized articles" : "List of free articles"
      }`,
    },
  };
}
