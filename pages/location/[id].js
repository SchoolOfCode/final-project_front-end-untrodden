import Image from 'next/image';
import styles from '../../styles/LocationDisplayPage.module.css';

import Modal from '../../Components/LocationPageComponents/Modal';
//map stuff
import MapLocationPage from '../../Components/MapLocationPage/mapLocationPage';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// import { Modal } from '@mui/material';

import Button from '../../Components/Button/button';

import { useUser } from '@auth0/nextjs-auth0';

import { useRouter } from 'next/router';
import { style } from '@mui/system';

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
    revalidate: 1,
  };
}

export default function LocationDisplayPage({ location }) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  async function deleteFromDatabase() {
    const id = location[0].location_id;
    console.log(id);
    const res = await fetch(
      'https://untrodden-untrodded.herokuapp.com/locations/' + id,
      { method: 'DELETE' }
    );
    const data = await res.json();
    return router.push('/locations');
  }
  function handleDelete() {
    let text;
    if (confirm('Are you sure you want to delete this location?') == true) {
      deleteFromDatabase();
    } else {
      text = 'You canceled!';
    }
  }

  function handleEdit() {
    let text;
    if (confirm('Are you sure you want to edit this location?') == true) {
      router.push('/editlocation/' + location[0].location_id);
    } else {
      text = 'You canceled!';
    }
  }

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
            <h1 className={styles.title}>{location[0].location_name} </h1>
            <div className={styles.edit_delete_container_mobile}>
              {user && user.email === location[0].user_email ? (
                <>
                  <Button label="Edit" onClick={handleEdit} />
                  <Button label="Delete" onClick={handleDelete} />
                </>
              ) : null}
            </div>

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
            <div className={styles.edit_delete_container_desktop}>
              {user && user.email === location[0].user_email ? (
                <>
                  <Button label="Edit" onClick={handleEdit} />
                  <Button label="Delete" onClick={handleDelete} />
                </>
              ) : null}
            </div>
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
