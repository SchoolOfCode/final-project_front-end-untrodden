import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

export default function Nav(){
    return <header className={styles.header}>
        <img className={styles.image} src='/Inline-logo-whiteandblack.png' />
        <nav className={styles.nav}>
        <Link href='/'><a>HOME</a></Link>
        <Link href='/aboutUs'><a>ABOUT US</a></Link>
        <Link href='/addLocation'><a>ADD LOCATION</a></Link>
        <a>LOGIN</a>
        </nav>
    </header>
}