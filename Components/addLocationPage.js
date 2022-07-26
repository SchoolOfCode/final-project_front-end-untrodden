import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

//components
import LocationNameAndAddress from "../Components/FormComponents/LocationNameAndAddress";
import LocationDescription from "../Components/FormComponents/LocationDescription";
import LocationCategory from "../Components/FormComponents/LocationCategory";
import LocationAmenities from "../Components/FormComponents/LocationAmenities";
// dynamic components
import dynamic from "next/dynamic";


import styles from "../styles/addLocation.module.css";
import { useForm } from "react-hook-form";
import LocationCoordinates from "../Components/FormComponents/LocationCoordinates";
import { useEffect, useState } from "react";
import FormMap from "./FormComponents/FormMap";
import { useUser } from "@auth0/nextjs-auth0";
import { useSlotProps } from "@mui/base";


const Cloudinary = dynamic(
  () => import("../Components/FormComponents/Cloudinary"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

// function to add a new location to the backend
export default function AddLocationPage() {

  

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      latitude: 52.489471,
      longitude: -2.898575,
      image_url:
        "https://res.cloudinary.com/dnshrtqmv/image/upload/v1659972687/no-image-placeholder_copy_yriogz.png",
    },
  });

  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const onSubmit = async (data) => {
    console.log(data);
    console.log(user.email)
    console.log({...data, user_email:  user ? user.email : "" })

    const res = await fetch(

      "https://untrodden-untrodded.herokuapp.com/locations",
      {
        method: "POST",
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

  // function to add a new resources to the backend
  async function postResources(input) {
    const res = await fetch("v1/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = await res.json();
    return data;
  }

  return (
    <>
      <Head>
        <title>Add Location | Untrodden</title>
        <meta name="description" content="Add location" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.max_page_width}>
          <h1 className={styles.h1}>Add Location</h1>


          {!user && (
            <div className={styles.login_warning_container}>
              <p className={styles.login_warning}>Please </p>
              <button
                className={styles.btn}
                onClick={() => {
                  router.push('/api/auth/login');

                }}
              >
                Log in
              </button>

              <p className={styles.login_warning}>
                {' '}
                before completing the form
              </p>
            </div>
          )}


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
                <button className={styles.btn}>Add Location</button>
              ) : (
                <button className={styles.btnDisabled} disabled>
                  Log in first!
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
