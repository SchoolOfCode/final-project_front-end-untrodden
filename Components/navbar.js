import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Profile from './Profile.js';
import { useUser } from '@auth0/nextjs-auth0';

export default function Nav(){
    const { user } = useUser();


    return <header className={styles.header}>
        <img className={styles.image} src='/Inline-logo-whiteandblack.png' />
        <nav className={styles.nav}>
        <Link href='/'><a  className={styles.link}>HOME</a></Link>
        <Link href='/aboutUs'><a  className={styles.link}>ABOUT US</a></Link>
        <Link href='/addlocation'><a  className={styles.link}>ADD LOCATION</a></Link>
        {user ?
        <>
        <a href="/api/auth/logout">Logout</a>
        <Profile />
        </>
        : 
        <a href="/api/auth/login">Login</a>
        }
        </nav>
    </header>
}