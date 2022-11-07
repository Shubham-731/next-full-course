import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className={styles.nav}>
      <h3>Next Auth</h3>
      <ul
        className={`${styles.menu} ${
          !session && status === "loading" ? "loading" : "loaded"
        }`}
      >
        <li className={styles.menu_tab}>
          <Link href="/" className={styles.menu_link}>
            Home
          </Link>
        </li>

        {session && status === "authenticated" ? (
          <li className={styles.menu_tab}>
            <Link href="/dashboard" className={styles.menu_link}>
              Dashboard
            </Link>
          </li>
        ) : (
          ""
        )}

        <li className={styles.menu_tab}>
          <Link href="/blog" className={styles.menu_link}>
            Blog
          </Link>
        </li>
      </ul>

      <div>
        {!session && status !== "loading" ? (
          <button
            className={styles.auth_btn}
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            <Link href="/api/auth/signin" className={styles.auth_link}>
              Sign In
            </Link>
          </button>
        ) : (
          ""
        )}

        {session && status === "authenticated" ? (
          <button
            className={styles.auth_btn}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <Link href="/api/auth/signout" className={styles.auth_link}>
              Sign Out
            </Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
export default Navbar;
