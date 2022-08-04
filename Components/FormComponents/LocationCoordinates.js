import styles from '../../styles/addLocation.module.css'
import NumberFormat from 'react-number-format';

export default function LocationCoordinates({ register }) {
    return (
      <>
        
        {/* Coordinates */}
        <label className={styles.label} htmlFor="Coordinates">Coordinates:</label>
      <p>Please ensure only numbers are entered into the co-ordinates fields. anything West or South will be a negative (-) value. <br/><br/>For example if Google gave you '52.4862° N, 1.8904° W' you would enter '52.4862' into the Latitude and '-1.8904' into the Longitude</p>
  
        <label  className={styles.label}  htmlFor="Longitude"></label>
        
  
        <label  className={styles.label}  htmlFor="Latitude"></label>
        <input
        required
        className={styles.input}
          type="text"
          id="Latitude"
          placeholder="Latitude"
          pattern="[0-9,-]{1,15}"
          title="Positive and negative decimal numbers only."
          {...register('latitude')}
        />

<input
        required
        className={styles.input}
        type="text"
          id="Latitude"
          placeholder="Latitude"
          pattern="[0-9,\-]{1,15}"
          title="Positive and negative decimal numbers only."
          {...register('longitude')}
        />
      </>
    );
  }
  