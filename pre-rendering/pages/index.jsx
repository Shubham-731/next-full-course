import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Pre-rendering lesson</h1>
      <Link href="/posts">
        <button>Recent Posts</button>
      </Link>
    </div>
  );
}
