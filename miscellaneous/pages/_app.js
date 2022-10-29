// import Header from "../components/Header"; // Relative import
import Header from "@/layout/Header"; // Absolute import & module paths
// import Footer from "../components/Footer"; // Relative import
import Footer from "@/layout/Footer"; // Absolute import
// import "../styles/layout.css"; // Relative import
import "styles/layout.css"; // Absolute import
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // If component layout is defined
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta
          name="description"
          content="This is the description of this course"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
