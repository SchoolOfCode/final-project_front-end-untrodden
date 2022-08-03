import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

// authorisation
import Profile from "./Profile.js";

// image
import ProfileDefault from "../public/profile_pic_default.png";

// css
import styles from "../styles/Navbar.module.css";

export default function Nav() {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <img className={styles.image} src="/Inline-logo-whiteandblack.png" />
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/aboutUs">
          <a className={styles.link}>About Us</a>
        </Link>

        {user ? (
          <Link className={styles.link} href="/addlocation">
            Add Location
          </Link>
        ) : (
          <a className={styles.link} href="/api/auth/login">
            Add Location
          </a>
        )}

        {user ? (
          <>
            <a className={styles.link} href="/api/auth/logout">
              Logout
            </a>
            <Profile />
          </>
        ) : (
          <>
            <a className={styles.link} href="/api/auth/login">
              Login
            </a>
            <Image
              src={ProfileDefault}
              alt="profile"
              className={styles.default_image}
              height={50}
              width={50}
            />
          </>
        )}
      </nav>
    </header>
  );
}
