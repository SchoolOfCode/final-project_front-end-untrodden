import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

import styles from "../styles/addLocation.module.css";

// components
import LocationNameAndAddress from "../Components/FormComponents/LocationNameAndAddress";
import LocationDescription from "../Components/FormComponents/LocationDescription";
import LocationCategory from "../Components/FormComponents/LocationCategory";
import LocationAmenities from "../Components/FormComponents/LocationAmenities";
import LocationCoordinates from "../Components/FormComponents/LocationCoordinates";

const Cloudinary = dynamic(
  () => import("../Components/FormComponents/Cloudinary"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);

// function to add a new location to the backend
export default function AddLocationPage() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch("https://untrodden.herokuapp.com/locations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    console.log(responseData);
    return responseData;
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Add Location</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* left side of form */}
          <div className={styles.main_grid_container}>
            <div className={styles.flex_container_left}>
              <LocationNameAndAddress register={register} />

              <LocationDescription register={register} />

              <label htmlFor="Location Category">Location category:</label>
              <div className={styles.location_category_grid_container}>
                <LocationCategory register={register} />
              </div>
            </div>

            {/* right side of form */}
            <div className={styles.grid_right}>
              <div className={styles.flex_container_right}>
                <label>Select all available Amenities</label>
                <div className={styles.amenities_category_grid_container}>
                  <LocationAmenities register={register} />
                </div>

                <LocationCoordinates register={register} />

                {/* add image will go here */}
                <Cloudinary setValue={setValue} />
              </div>
            </div>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.btn}>Add Location</button>
          </div>
        </form>
      </main>
    </>
  );
}
