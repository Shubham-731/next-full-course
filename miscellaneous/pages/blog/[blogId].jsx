import Head from "next/head";
import { useRouter } from "next/router";

const Blog = ({ title, desc }) => {
  const router = useRouter();
  const { query: params } = router;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <div>
        <h3>Blog {params.blogId}</h3>
        <p>Public key "{process.env.NEXT_PUBLIC_ENV}"</p>
      </div>
    </>
  );
};

export default Blog;

export function getServerSideProps(context) {
  const { query: params } = context;

  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  console.log({ DB_USER, DB_PASSWORD });

  return {
    props: {
      title: `Blog ${params.blogId}`,
      desc: `Very large description of blog ${params.blogId}`,
    },
  };
}
