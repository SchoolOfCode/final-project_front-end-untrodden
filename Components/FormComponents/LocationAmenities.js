import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

// css 
import styles from "../../styles/addLocation.module.css";

// images for icons
import Parking from "../../public/amenities_images/amenities_parking.png";
import Food from "../../public/amenities_images/amenities_food.png";
import Family from "../../public/amenities_images/amenities_family.png";
import BabyChanging from "../../public/amenities_images/amenities_changing_facilities.png";
import Disability from "../../public/amenities_images/amenities_disability_access.png";
import Peaceful from "../../public/amenities_images/amenities_peaceful.png";
import Wifi from "../../public/amenities_images/amenities_wifi.png";
import NoRestaurants from "../../public/amenities_images/amenities_no_restaurants.png";
import Museums from "../../public/amenities_images/amenities_museums.png";
import Beach from "../../public/amenities_images/amenities_beach.png";
import Hiking from "../../public/amenities_images/amenities_hiking.png";
import PetFriendly from "../../public/amenities_images/amenities_pet_friendly.png";
import Forests from "../../public/amenities_images/amenities_forests.png";
import Wildlife from "../../public/amenities_images/amenities_lots_of_wildlife.png";
import Watersports from "../../public/amenities_images/amenities_watersports.png";
import Shopping from "../../public/amenities_images/amenities_shopping.png";
import Water from "../../public/amenities_images/amenities_bodies_of_water.png";
import Camping from "../../public/amenities_images/amenities_camping.png";
import Mountains from "../../public/amenities_images/amenities_mountains.png";
import HearingLoop from "../../public/amenities_images/amenities_hearing_loop.png";
import ElectricCharging from "../../public/amenities_images/amenities_electric_charging.png";
import PublicTransportGood from "../../public/amenities_images/amenities_public_transport_good.png";
import Accommodation from "../../public/amenities_images/amenities_accommodation.png";
import BadPublicTransport from "../../public/amenities_images/amenities_public_transport_bad.png";

// responsive amenities icons wrapped in tooltip
export default function LocationAmenities({ register, amenities }) {
console.log(amenities);
console.log((amenities.includes('amenities_parking') ? "true" : "false"))
console.log((amenities.includes('amenities_food') ? "true" : "false"))
// const parking = document.getElementById('amenities_parking')
// console.log(parking.checked)

  return (
    <>
      <div className={`${styles.amenities_category} ${styles.checked}`}>

        <Tooltip title="Parking">
          <label>
            <input
              type="checkbox"
              id="amenities_parking"
              {...register("amenities_parking")}
              defaultChecked={amenities ? (amenities.includes('amenities_parking') ? true: false) : false}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Parking}
                height={35}
                width={35}
                alt="Parking image"
              ></Image>
            </span>
          </label>
        </Tooltip>
       
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Food">
          <label>
            <input
              type="checkbox"
              id="amenities_food"
              {...register("amenities_food")}
              defaultChecked={amenities ? (amenities.includes('amenities_food') ? true: false) : false}
            />
            <span>
              <Image
                // className={document.getElementById('amenities_food').checked ? styles.amenities_pic .amenityDefaultChecked : styles.amenities_pic}
                // className={!amenities.includes('amenities_food') ? styles.amenities_pic .amenityDefaultChecked : styles.amenities_pic}
                className={styles.amenities_pic}
                src={Food}
                height={35}
                width={35}
                alt="Food image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Family">
          <label>
            <input
              type="checkbox"
              id="amenities_family"
              defaultChecked={amenities ? (amenities.includes('amenities_family') ? true: false) : false}
              {...register("amenities_family")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Family}
                height={35}
                width={35}
                alt="Family image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Changing facilities">
          <label>
            <input
              type="checkbox"
              id="amenities_changing_facilities"
              defaultChecked={amenities ? (amenities.includes('amenities_changing_facilities') ? true: false) : false}
              {...register("amenities_changing_facilities")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={BabyChanging}
                height={35}
                width={35}
                alt="Changing facilities image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Disability acccess">
          <label>
            <input
              type="checkbox"
              id="amenities_disability_access"
              {...register("amenities_disability_access")}
              defaultChecked={amenities ? (amenities.includes('amenities_disability_access') ? true: false) : false}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Disability}
                height={35}
                width={35}
                alt="Disability access image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Peaceful">
          <label>
            <input
              type="checkbox"
              id="amenities_peaceful"
              defaultChecked={amenities ? (amenities.includes('amenities_peaceful') ? true: false) : false}
              {...register("amenities_peaceful")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Peaceful}
                height={35}
                width={35}
                alt="Peaceful image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Wifi">
          <label>
            <input
              type="checkbox"
              id="amenities_wifi"
              defaultChecked={amenities ? (amenities.includes('amenities_wifi') ? true: false) : false}
              {...register("amenities_wifi")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Wifi}
                height={35}
                width={35}
                alt="Wifi image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="No restaurants">
          <label>
            <input
              type="checkbox"
              id="amenities_no_restaurants"
              defaultChecked={amenities ? (amenities.includes('amenities_no_restaurants') ? true: false) : false}
              {...register("amenities_no_restaurants")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={NoRestaurants}
                height={35}
                width={35}
                alt="No restaurants image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Museums">
          <label>
            <input
              type="checkbox"
              id="amenities_museums"
              defaultChecked={amenities ? (amenities.includes('amenities_museums') ? true: false) : false}
              {...register("amenities_museums")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Museums}
                height={35}
                width={35}
                alt="Museums image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Beach">
          <label>
            <input
              type="checkbox"
              id="amenities_beach"
              defaultChecked={amenities ? (amenities.includes('amenities_beach') ? true: false) : false}
              {...register("amenities_beach")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Beach}
                height={35}
                width={35}
                alt="Beach image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Hiking">
          <label>
            <input
              type="checkbox"
              id="amenities_hiking"
              defaultChecked={amenities ? (amenities.includes('amenities_hiking') ? true: false) : false}
              {...register("amenities_hiking")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Hiking}
                height={35}
                width={35}
                alt="Hiking image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Pet friendly">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_pet_friendly') ? true: false) : false}
              id="amenities_pet_friendly"
              {...register("amenities_pet_friendly")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={PetFriendly}
                height={35}
                width={35}
                alt="Pet friendly image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Forests">
          <label>
            <input
              defaultChecked={amenities ? (amenities.includes('amenities_forests') ? true: false) : false}
              type="checkbox"
              id="amenities_forests"
              {...register("amenities_forests")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Forests}
                height={35}
                width={35}
                alt="Forests image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Lots of wildlife">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_lots_of_wildlife') ? true: false) : false}
              id="amenities_lots_of_wildlife"
              {...register("amenities_lots_of_wildlife")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Wildlife}
                height={35}
                width={35}
                alt="Lots of wildlife image "
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Watersports">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_watersports') ? true: false) : false}
              id="amenities_watersports"
              {...register("amenities_watersports")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Watersports}
                height={35}
                width={35}
                alt="Watersports image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Shopping">
          <label>
            <input
              type="checkbox"
              id="amenities_shopping"
              defaultChecked={amenities ? (amenities.includes('amenities_shopping') ? true: false) : false}
              {...register("amenities_shopping")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Shopping}
                height={35}
                width={35}
                alt="Shopping image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Bodies of water">
          <label>
            <input
              type="checkbox"
              id="amenities_bodies_of_water"
              defaultChecked={amenities ? (amenities.includes('amenities_bodies_of_water') ? true: false) : false}
              {...register("amenities_bodies_of_water")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Water}
                height={35}
                width={35}
                alt="Bodies of water image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Camping">
          <label>
            <input
              type="checkbox"
              id="amenities_camping"
              defaultChecked={amenities ? (amenities.includes('amenities_camping') ? true: false) : false}
              {...register("amenities_camping")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Camping}
                height={35}
                width={35}
                alt="Camping image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Mountains">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_mountains') ? true: false) : false}
              id="amenities_mountains"
              {...register("amenities_mountains")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Mountains}
                height={35}
                width={35}
                alt="Mountains image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Hearing loop">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_hearing_loop') ? true: false) : false}
              id="amenities_hearing_loop"
              {...register("amenities_hearing_loop")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={HearingLoop}
                height={35}
                width={35}
                alt="Hearing loop"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Electric charging">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_electric_charging') ? true: false) : false}
              id="amenities_electric_charging"
              {...register("amenities_electric_charging")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={ElectricCharging}
                height={35}
                width={35}
                alt="Electric charging image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Public transport good">
          <label>
            <input
              type="checkbox"
              id="amenities_public_transport_good"
              defaultChecked={amenities ? (amenities.includes('amenities_public_transport_good') ? true: false) : false}
              {...register("amenities_public_transport_good")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={PublicTransportGood}
                height={35}
                width={35}
                alt="Public transport good image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Accomodation">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_accommodation') ? true: false) : false}
              id="amenities_accommodation"
              {...register("amenities_accommodation")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={Accommodation}
                height={35}
                width={35}
                alt="Accomodation image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>

      <div className={`${styles.amenities_category} ${styles.checked}`}>
        <Tooltip title="Public transport bad">
          <label>
            <input
              type="checkbox"
              defaultChecked={amenities ? (amenities.includes('amenities_public_transport_bad') ? true: false) : false}
              id="amenities_public_transport_bad"
              {...register("amenities_public_transport_bad")}
            />
            <span>
              <Image
                className={styles.amenities_pic}
                src={BadPublicTransport}
                height={35}
                width={35}
                alt="Public transport bad image"
              ></Image>
            </span>
          </label>
        </Tooltip>
      </div>
    </>
  );
}
