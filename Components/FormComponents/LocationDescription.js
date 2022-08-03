import styles from '../../styles/addLocation.module.css';

export default function LocationDescription({ register }) {
  return (
    <>
      <label className={styles.label}  htmlFor="locationDescription">Location Description:</label>
      <p className={styles.description_p}>
        Let us know why it’s a place worth visiting. Also, please tell us about
        any nice restaurants or pubs in the area, transport tips and any other
        useful information for a first time visitor.
      </p>
      <textarea
      required
      className={styles.input}
        id="locationDescription"
        {...register('location_description')}
      />
    </>
  );
}
