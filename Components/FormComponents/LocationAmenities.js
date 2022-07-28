//pictures
import Parking from '../../public/amenities_images/local_parking.png';
import Food from '../../public/amenities_images/food.png';
import Family from '../../public/amenities_images/carbon_pedestrian-family.png';
import BabyChanging from '../../public/amenities_images/baby_changing_station.png';
import Disability from '../../public/amenities_images/accessible.png';
import Peaceful from '../../public/amenities_images/bxs_volume-mute.png';
import Wifi from '../../public/amenities_images/wifi.png';
import NoRestaurants from '../../public/amenities_images/no_meals.png';
import Museums from '../../public/amenities_images/museum.png';
import Beach from '../../public/amenities_images/beach.png';
import Hiking from '../../public/amenities_images/hiking.png';
import PetFriendly from '../../public/amenities_images/pet_friendly.png';
import Forests from '../../public/amenities_images/nature.png';
import Wildlife from '../../public/amenities_images/wildlife.png';
import Watersports from '../../public/amenities_images/kayaking.png';
import Shopping from '../../public/amenities_images/shopping_bag.png';
import Water from '../../public/amenities_images/water.png';
import Camping from '../../public/amenities_images/camping.png';
import Mountains from '../../public/amenities_images/filter_hdr.png';
import HearingLoop from '../../public/amenities_images/hearing.png';
import ElectricCharging from '../../public/amenities_images/electric.png';
import PublicTransportGood from '../../public/amenities_images/directions_car.png';
import Accommodation from '../../public/amenities_images/cottage.png';
import BadPublicTransport from '../../public/amenities_images/commute.png';

//styles sheet
import styles from '../../styles/addLocation.module.css';
//image
import Image from 'next/image';

export default function LocationAmenities({ register }) {
  return (
    <>
      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
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

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_bodies_of_water"
            {...register('amenities_bodies_of_water')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={Water}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_camping"
            {...register('amenities_camping')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={Camping}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_mountains"
            {...register('amenities_mountains')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={Mountains}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_hearing_loop"
            {...register('amenities_hearing_loop')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={HearingLoop}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_electric_charging"
            {...register('amenities_electric_charging')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={ElectricCharging}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_public_transport_good"
            {...register('amenities_public_transport_good')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={PublicTransportGood}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_accommodation"
            {...register('amenities_accommodation')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={Accommodation}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id="amenities_public_transport_bad"
            {...register('amenities_public_transport_bad')}
          />
          <span>
            <Image
              className={styles.amenities_pic}
              src={BadPublicTransport}
              height={35}
              width={35}
            ></Image>
          </span>
        </label>
      </div>
    </>
  );
}