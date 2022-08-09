// Need to import all location data into here, then recreate inputs where the default value is the equvilant to the data (recreate add location form) but onsubmit is a ptach not post.






import React, { useState, useEffect } from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/addLocation.module.css"
import { getStaticPaths } from './location/[id]';
import { getStaticProps } from './location/[id]';
import Head from 'next/head';
import { hexToRgb } from '@mui/material'



function editLocation({ location }) {
  const [allLocationData, setAllLocationData] = useState([]);
  const [pending, setPending] = useState(true)
  const { user, error, isLoading } = useUser();
const [ updetedText, setUpdatedText] = useState("")


useEffect(() => {
  const fetchData = async () => {
    const url = `https://untrodden-untrodded.herokuapp.com/locations`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllLocationData(data.payload);
      setDisplayedData(data.payload);
      setPending(false)
    } catch (error) {
      console.log('error', error);
      setPending(false)
    }
  };

  fetchData();
}, []);



  return user && (
    <>

      <section>
    <label className={styles.label} htmlFor="Street/road"></label>
    <input
    required
    className={styles.input}
      type="text"
      id="Street/road"
      placeholder="Street Address"
      pattern="[a-z, A-Z, 0-9]{1,30}"
      title="Only Letters 'A-Z' and Numbers '0-9'  allowed"
      defaultValue={ user.email }
    />
    </section>

    <section>
    <label className={styles.label} htmlFor="Street/road"></label>
    <input
    required
    className={styles.input}
      type="text"
      id="Street/road"
      placeholder="Street Address"
      pattern="[a-z, A-Z, 0-9]{1,30}"
      title="Only Letters 'A-Z' and Numbers '0-9'  allowed"
      defaultValue={ user.email }
    />
    </section>

    </>
  )
}

export default editLocation