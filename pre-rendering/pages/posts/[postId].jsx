import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>
        {post.id}: {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  /* const paths = posts.map((post) => ({
    params: {
      postId: post.id.toString(),
    },
  })); */

  /* return {
    paths,
    fallback: false,
  }; */

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true, // fallback: true | false | "blocking"
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
