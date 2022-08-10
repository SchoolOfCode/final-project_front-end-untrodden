// css
import styles from "../../styles/addLocation.module.css";

// location desciption input
export default function LocationDescription({ register }) {
  return (
    <>
      <label className={styles.label}  htmlFor="locationDescription">Location Description:</label>
      <p className={styles.description_p}>
        Let us know why it’s a place worth visiting. Please tell us about
        any nice restaurants or pubs in the area, transport tips and any other
        useful information for a first time visitor. 
      </p>
      <textarea
      required
      className={styles.input}
        id="locationDescription"
        minlength="300"
        maxlength="5000"
        title="Minimum 300 characters, maximum of 5000. "
        {...register("location_description")}
      />
    </>
  );
}
