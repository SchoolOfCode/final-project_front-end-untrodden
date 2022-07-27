import Image from 'next/image';
// amenities pics
import Parking from '../public/amenities_images/local_parking.png';
import Food from '../public/amenities_images/food.png';
import Family from '../public/amenities_images/carbon_pedestrian-family.png';
import BabyChanging from '../public/amenities_images/baby_changing_station.png';
import Disability from '../public/amenities_images/accessible.png';
import Peaceful from '../public/amenities_images/bxs_volume-mute.png';
import Wifi from '../public/amenities_images/wifi.png';
import NoRestaurants from '../public/amenities_images/no_meals.png';
import Museums from '../public/amenities_images/museum.png';
import Beach from '../public/amenities_images/beach.png';
import Hiking from '../public/amenities_images/hiking.png';
import PetFriendly from '../public/amenities_images/pet_friendly.png';
import Forests from '../public/amenities_images/nature.png';
import Wildlife from '../public/amenities_images/wildlife.png';
import Watersports from '../public/amenities_images/kayaking.png';
import Shopping from '../public/amenities_images/shopping_bag.png';

import styles from '../styles/addLocation.module.css';
import { useForm } from 'react-hook-form';

export default function Addlocation() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Add Location</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.main_grid_container}>
          <div className={styles.flex_container_left}>
            {/* location name section */}
            <label htmlFor="locationName">Location Name:</label>
            <input
              type="text"
              id="locationName"
              {...register('locationName')}
            />
            {/* address section */}
            <label htmlFor="Location Address">Location Address:</label>

            <label htmlFor="Street/road"></label>
            <input
              type="text"
              id="Street/road"
              placeholder="Street/Road"
              {...register('street')}
            />

            <label htmlFor="location Town"></label>
            <input
              type="text"
              id="location Town"
              placeholder="Town"
              {...register('town')}
            />

            <label htmlFor="location Region"></label>
            <input
              type="text"
              id="locationn Region"
              placeholder="Region"
              {...register('region')}
            />

            <label htmlFor="location Postcode"></label>
            <input
              type="text"
              id="location Postcode"
              placeholder="Postcode"
              {...register('postcode')}
            />

            {/* location description */}

            <label htmlFor="locationDescription">Location Description:</label>
            <p className={styles.description_p}>
              Let us know why it’s a place worth visiting. Also, please tell us
              about any nice restaurants or pubs in the area, transport tips and
              any other useful information for a first time visitor.
            </p>
            <textarea
              id="locationDescription"
              {...register('location_description')}
            />

            {/* location category */}

            <label htmlFor="Location Category">Location category:</label>
            <div className={styles.location_category_grid_container}>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_seaside"
                    {...register('category_seaside')}
                  />
                  <span>Seaside</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_castles"
                    {...register('category_castles')}
                  />
                  <span>Castles</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="caves" {...register('caves')} />
                  <span>Caves</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_peaceful"
                    {...register('category_peaceful')}
                  />
                  <span>Peaceful</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_hiking"
                    {...register('category_hiking')}
                  />
                  <span>Hiking</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_hills"
                    {...register('category_hills')}
                  />
                  <span>Hills</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_historic"
                    {...register('category_historic')}
                  />
                  <span>Historic</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_secluded"
                    {...register('category_secluded')}
                  />
                  <span>Secluded</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_casual"
                    {...register('category_casual')}
                  />
                  <span>Casual</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_lake"
                    {...register('category_lake')}
                  />
                  <span>Lake</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_busy"
                    {...register('category_busy')}
                  />
                  <span>Busy</span>
                </label>
              </div>

              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="category_woods"
                    {...register('category_woods')}
                  />
                  <span>Woods</span>
                </label>
              </div>
            </div>
          </div>

          {/* amenities section */}

          <div className={styles.grid_right}>
            <div className={styles.flex_container_right}>
              <label>Select all available Amenities</label>

              <div className={styles.amenities_category_grid_container}>
                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_parking"
                      {...register('amenities_parking')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Parking}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_food"
                      {...register('amenities_food')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Food}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_family"
                      {...register('amenities_family')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Family}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_changing_facilities"
                      {...register('amenities_changing_facilities')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={BabyChanging}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_disability_access"
                      {...register('amenities_disability_access')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Disability}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_peaceful"
                      {...register('amenities_peaceful')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Peaceful}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_wifi"
                      {...register('amenities_wifi')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Wifi}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_no_restaurants"
                      {...register('amenities_no_restaurants')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={NoRestaurants}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_museums"
                      {...register('amenities_museums')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Museums}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_beach"
                      {...register('amenities_beach')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Beach}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_hiking"
                      {...register('amenities_hiking')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Hiking}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_pet_friendly"
                      {...register('amenities_pet_friendly')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={PetFriendly}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_forests"
                      {...register('amenities_forests')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Forests}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_lots_of_wildlife"
                      {...register('amenities_lots_of_wildlife')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Wildlife}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_watersports"
                      {...register('amenities_watersports')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Watersports}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>

                <div
                  className={`${styles.amenities_category} ${styles.checked}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      id="amenities_shopping"
                      {...register('amenities_shopping')}
                    />
                    <span>
                      <Image
                        className={styles.amenities_pic}
                        src={Shopping}
                        height={35}
                        width={35}
                      ></Image>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.btn}>Add Location</button>
        </div>
      </form>
    </main>
  );
}
