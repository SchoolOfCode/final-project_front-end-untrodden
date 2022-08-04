
import styles from '../../styles/addLocation.module.css';

export default function LocationNameAndAddress({ register }) {
  return (
    <>
      <label className={styles.label} htmlFor="locationName">Location Name:</label>
      <input required type="text" id="locationName" pattern="[a-z, A-Z, 0-9]{1,30}"
        title="Only Letters 'A-Z' and Numbers '0-9'  allowed" {...register('location_name')} />
      {/* address section */}
      <label className={styles.label} htmlFor="Location Address">Location Address:</label>


      <label className={styles.label} htmlFor="Street/road"></label>
      <input
      required
      className={styles.input}
        type="text"
        id="Street/road"
        placeholder="Street Address"
        pattern="[a-z, A-Z, 0-9]{1,30}"
        title="Only Letters A-Z allowed"
        {...register("street")}
      />

      <label className={styles.label}  htmlFor="location Town"></label>
      <input
      required
            className={styles.input}
        type="text"
        id="location Town"
        placeholder="Town"
        pattern="[a-z, A-Z]{1,30}"
        title="Only Letters A-Z allowed"
        {...register("town")}
      />



      <label className={styles.label} htmlFor="region-select">Choose a Region:</label>
      <select required className={styles.input} name="region" id="region-select" {...register('region')}>

        <option value="West Midlands">West Midlands</option>
        <option value="London">London</option>
        <option value="North East">North East</option>
        <option value="North West">North West</option>
        <option value="Yorkshire">Yorkshire</option>
        <option value="East Midlands">East Midlands</option>
        <option value="South East">South East</option>
        <option value="East of England">East of England</option>
        <option value="South West">South West</option>
        <option value="North Wales">North Wales</option>
        <option value="Mid Wales">Mid Wales</option>
        <option value="South West Wales">South West Wales</option>
        <option value="South East Wales">South East Wales</option>
        <option value="South West Scotland">South West Scotland</option>
        <option value="North East Scotland">North East Scotland</option>
        <option value="Central Scotland East">Central Scotland East</option>
        <option value="Central Scotland West">Central Scotland West</option>
        <option value="Scottish Highlands and Western Isles">
          Scottish Highlands and Western Isles
        </option>
        <option value="Shetland and Orkney Islands">
          Shetland and Orkney Islands
        </option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="Glasgow">Glasgow</option>
        <option value="Antrim">Antrim</option>
        <option value="Armagh">Armagh</option>
        <option value="Down">Down</option>
        <option value="Fermanagh">Fermanagh</option>
        <option value="Londonderry">Londonderry</option>
        <option value="Tyrone">Tyrone</option>
      </select>

      <label className={styles.label} htmlFor="location Postcode"></label>
      <input
      required
      className={styles.input}
        type="text"
        id="location Postcode"
        placeholder="Postcode"
        pattern="[a-z, A-Z, 0-9]{1,9}"
        title="Only Letters 'A-Z' and numbers '0-9' allowed Maximum 9 Characters"
        {...register("postcode")}
      />
    </>
  );
}
