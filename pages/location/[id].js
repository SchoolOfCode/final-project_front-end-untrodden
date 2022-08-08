import Image from 'next/image';
import styles from '../../styles/LocationDisplayPage.module.css';

import Modal from '../../Components/LocationPageComponents/Modal';
//map stuff
import MapLocationPage from '../../Components/MapLocationPage/mapLocationPage';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// import { Modal } from '@mui/material';

// working in this one
export async function getStaticPaths() {
  const res = await fetch(
    'https://untrodden-untrodded.herokuapp.com/locations/'
  );
  const data = await res.json();

  const paths = data.payload.map((location) => {
    return {
      params: { id: location.location_id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(id);
  const res = await fetch(
    'https://untrodden-untrodded.herokuapp.com/locations/' + id
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { location: data.payload },
  };
}

export default function LocationDisplayPage({ location }) {
  return (
    <>
      <Head>
        <title>{location[0].location_name} | Untrodden</title>
        <meta name="description" content="About us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.location_page_wrapper}>
        <div className={styles.location_page}>
          <div className={styles.left_div}>
            <h1 className={styles.title}>{location[0].location_name}</h1>
            <img src={location[0].image_url} className={styles.image}></img>
            <h3 className={styles.heading}>Categories:</h3>
            <section className={styles.categories}>
              {location[0].categories.map((category) => (
                <p>{category.charAt(9).toUpperCase() + category.slice(10)}</p>
              ))}
            </section>
            <h3 className={styles.heading}>Amenities:</h3>
            <section className={styles.amenities}>
              {location[0].amenities.map((amenity) => (
                <div className={styles.icon_description}>
                  <img
                    className={styles.icon}
                    src={`/amenities_images/${amenity}.png`}
                  />
                  <p>
                    {(
                      amenity.charAt(10).toUpperCase() + amenity.slice(11)
                    ).replaceAll(/_/g, ' ')}
                  </p>
                </div>
              ))}
            </section>
            {/* <Modal location={location[0]} /> */}
          </div>
          <div className={styles.right_div}>
            <h3 className={styles.heading_description}>Description:</h3>
            <p>{location[0].location_description}</p>
            <h3 className={styles.heading}>Address:</h3>
            {/* <p>{location[0].street}</p>
          <p>{location[0].town}</p>
          <p>{location[0].region}</p>
          <p>{location[0].postcode}</p> */}
            <p>
              {location[0].street} <br></br>
              {location[0].town}
              <br></br>
              {/* {location[0].region}<br></br> */}
              {location[0].postcode}
            </p>

            <div className={styles.map_container}>
              <MapLocationPage location={location} />
            </div>
            <Modal id={styles.mobile_modal} location={location[0]} />
          </div>
        </div>
      </div>
    </>
  );
}
