import Link from "next/link";
import Router from "next/router";

export default function Home() {
  const redirectToDocs = () => {
    console.log("Redirecting to docs...");
    Router.push("/docs");
  };

  return (
    <div>
      <h1>Home</h1>
      <Link href="/product">
        <a>Go to product page</a>
      </Link>
      <br />
      <Link href="/blog">
        <a>Go to blog page</a>
      </Link>
      <br />
      <button onClick={redirectToDocs}>Visit docs</button>
    </div>
  );
}
