import Head from "next/head";
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="This is the description of login page"
        />
      </Head>

      <div className="content">
        <h1>Login here</h1>
      </div>
    </>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
