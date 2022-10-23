import Link from "next/link";

const posts = ({ posts }) => {
  return (
    <div>
      <h1>Recent Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <Link passHref href={`/posts/${post.id}`}>
            <h2>
              {post.id}: {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
