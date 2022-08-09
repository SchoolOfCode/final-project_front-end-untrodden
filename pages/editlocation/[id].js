import Image from "next/image";

import Modal from "../../Components/LocationPageComponents/Modal";
//map stuff
import MapLocationPage from "../../Components/MapLocationPage/mapLocationPage";
import dynamic from "next/dynamic";
import Head from "next/head";
// import { Modal } from '@mui/material';

import Button from "../../Components/Button/button";

import { useUser } from "@auth0/nextjs-auth0";

import { useRouter } from 'next/router';

import LocationNameAndAddress from "../../Components/FormComponents/LocationNameAndAddress";
import LocationDescription from "../../Components/FormComponents/LocationDescription";
import LocationCategory from "../../Components/FormComponents/LocationCategory";
import LocationAmenities from "../../Components/FormComponents/LocationAmenities";
// dynamic components

import styles from "../../styles/addLocation.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormMap from "../../Components/FormComponents/FormMap";
import { useSlotProps } from "@mui/base";

const Cloudinary = dynamic(
  () => import("../../Components/FormComponents/Cloudinary"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);



// working in this one
export async function getStaticPaths() {
  const res = await fetch(
    "https://untrodden-untrodded.herokuapp.com/locations/"
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
    "https://untrodden-untrodded.herokuapp.com/locations/" + id
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { location: data.payload },
    revalidate: 1,
  };
}


export default function editLocationPage({ location }) {
  

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      location_name: location[0].location_name,
      street: location[0].street,
      town: location[0].town,
      region: location[0].region,
      postcode: location[0].postcode,
      location_description: location[0].location_description,
      category_seaside: location[0].category_seaside,
      category_castles: location[0].category_castles,
      category_caves: location[0].category_caves,
      category_peaceful: location[0].category_peaceful,
      category_hiking: location[0].category_hiking,
      category_hills: location[0].category_hills,
      category_historic: location[0].category_historic,
      category_secluded: location[0].category_secluded,
      category_casual: location[0].category_casual,
      category_lakes: location[0].category_lakes,
      category_busy: location[0].category_busy,
      category_woods: location[0].category_woods,
      amenities_parking: location[0].amenities_parking,
      amenities_food: location[0].amenities_food,
      amenities_family: location[0].amenities_family,
      amenities_changing_facilities: location[0].amenities_changing_facilities,
      amenities_disability_access: location[0].amenities_disability_access,
      amenities_peaceful: location[0].amenities_peaceful,
      amenities_electric_charging: location[0].amenities_electric_charging,
      amenities_no_restaurants: location[0].amenities_no_restaurants,
      amenities_museums: location[0].amenities_museums,
      amenities_beach: location[0].amenities_beach,
      amenities_hiking: location[0].amenities_hiking,
      amenities_pet_friendly: location[0].amenities_pet_friendly,
      amenities_forests: location[0].amenities_forests,
      amenities_lots_of_wildlife: location[0].amenities_lots_of_wildlife,
      amenities_watersports: location[0].amenities_watersports,
      amenities_shopping: location[0].amenities_shopping,
      amenities_bodies_of_water: location[0].amenities_bodies_of_water,
      amenities_camping: location[0].amenities_camping,
      amenities_mountains: location[0].amenities_mountains,
      amenities_hearing_loop: location[0].amenities_hearing_loop,
      amenities_public_transport_good: location[0].amenities_public_transport_good,
      amenities_public_transport_bad: location[0].amenities_public_transport_bad,
      amenities_accommodation: location[0].amenities_accommodation,
      amenities_wifi: location[0].amenities_wifi,
      image_url: location[0].image_url,
      latitude: location[0].latitude,
      longitude: location[0].longitude,
      user_email: location[0].user_email
    }
  });
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const onSubmit = async (data) => {
    console.log(data);
    console.log(user.email)
    console.log({...data, user_email:  user ? user.email : "" })

    const res = await fetch(
      "https://untrodden-untrodded.herokuapp.com/locations/" + location[0].location_id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...data, user_email:  user ? user.email : "" }),
      }
    );
    const responseData = await res.json();

    console.log(responseData);

    return (
      responseData,
      alert(
        `Thank you, ${user.name} for your submission, press 'Ok' be redirected to the locations page.`
      ),
      router.push("/locations")
    );
  };

  return (
    <>
      <Head>
        <title>Edit Location | Untrodden</title>
        <meta name="description" content="Edit location" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.max_page_width}>
          <h1 className={styles.h1}>Edit Location</h1>
          {user && user.email === location[0].user_email ? (
            <>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* left side of form */}
              <div className={styles.main_grid_container}>
                <div className={styles.flex_container}>
                  <LocationNameAndAddress register={register} />

                  <LocationDescription register={register} />

                  <label className={styles.label} htmlFor="Location Category">
                    Location category:
                  </label>
                  <div className={styles.location_category_grid_container}>
                    <LocationCategory register={register} />
                  </div>
                </div>

                {/* right side of form */}
                <div className={styles.grid_right}>
                  <div className={styles.flex_container}>
                    <label className={styles.label}>
                      Select all available Amenities:
                    </label>
                    <div className={styles.amenities_category_grid_container}>
                      <LocationAmenities register={register} />
                    </div>

                    <FormMap setValue={setValue} />

                    {/* add image will go here */}
                    <Cloudinary setValue={setValue} />
                  </div>
                </div>
              </div>
              <div>
              </div>
              <div className={styles.btn_container}>
                {user ? (
                  <button className={styles.btn}>Edit Location</button>
                ) : (
                  <button className={styles.btnDisabled} disabled>
                    Log in first!
                  </button>
                )}
              </div>
            </form>
            </>
            ): <p>Only the creator of this page may edit it.</p>}
        </div>
      </main>
    </>
  );
}
