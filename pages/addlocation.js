import CloudinaryTest from '../Components/FormComponents/Cloudinary';

import Image from 'next/image';
//components
import LocationNameAndAddress from '../Components/FormComponents/LocationNameAndAddress';
import LocationDescription from '../Components/FormComponents/LocationDescription';
import LocationCategory from '../Components/FormComponents/LocationCategory';
import LocationAmenities from '../Components/FormComponents/LocationAmenities';
// amenities pics

import styles from '../styles/addLocation.module.css';
import { useForm } from 'react-hook-form';

export default function Addlocation() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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

                {/* Mapbox map will go here */}

                {/* add image will go here */}

                {/* closing divs for the whole form */}
              </div>
            </div>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.btn}>Add Location</button>
          </div>
        </form>
        <CloudinaryTest />
      </main>
    </>
  );
}
