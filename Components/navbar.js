import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
//import MoreVertIcon from '@mui/icons-material/MoreVert';



// authorisation
import Profile from "./Profile.js";

// image
import ProfileDefault from "../public/profile_pic_default.png";

// css
import styles from "../styles/Navbar.module.css";

export default function Nav() {
  const { user } = useUser();
 
  
  const ITEM_HEIGHT = 48;
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <header className={styles.header}>

      

    <Link href="/locations">
      <img className={styles.image} src="/Inline-logo-whiteandblack.png" alt="Untrodden"/>
      </Link>

      <nav className={styles.nav}>

     
        <Link className={styles.link_desktop} href="/">
          <a className={styles.link_desktop}>Home</a>
        </Link>

        <Link className={styles.link_desktop} href="/locations">
          <a className={styles.link_desktop}>Locations</a>
        </Link>

        
          <Link className={styles.link_desktop} href="/addlocation">
            <a className={styles.link_desktop}>Add Location</a>
          </Link>


        {user ? (
          <>
            <a className={styles.link_desktop} href="/api/auth/logout">
              Logout
            </a>
            <Profile />
          </>
        ) : (
          <>
            <a className={styles.link_desktop} href="/api/auth/login">
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


        <div className={styles.hamburger}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
       
      >
     <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor: '#225544',
          },
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/">
          <a className={styles.link}>Home</a>
        </Link></MenuItem>

        <MenuItem onClick={handleClose}> <Link href="/locations">
          <a className={styles.link}>Locations</a>
        </Link></MenuItem>

        <MenuItem onClick={handleClose}><Link  href="/addlocation">
            <a className={styles.link}>Add Location</a>
          </Link></MenuItem>
      

        <MenuItem onClick={handleClose}>{user ? (
          <>
            <a className={styles.link} href="/api/auth/logout">
              Logout
            </a>
            
          </>
        ) : (
          <>
            <a className={styles.link} href="/api/auth/login">
              Login
            </a>
           
          </>
        )}</MenuItem>
        
      </Menu>
    </div>
      </nav>

      
    </header>
  );
}
