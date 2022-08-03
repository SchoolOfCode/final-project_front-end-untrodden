
import styles from '../../styles/addLocation.module.css'
import NumberFormat from 'react-number-format';

export default function LocationCoordinates({ register }) {
    return (
      <>
        
        {/* Coordinates */}
        <label className={styles.label} htmlFor="Coordinates">Coordinates:</label>
  
        <label  className={styles.label}  htmlFor="Longitude"></label>
        <input
        required
        className={styles.input}
          type="text"
          id="Longitude"
          placeholder="Longitude"
          
          {...register('longitude')}
        />
  
        <label  className={styles.label}  htmlFor="Latitude"></label>
        <input
        required
        className={styles.input}
          type="text"
          id="Latitude"
          placeholder="Latitude"
          
          {...register('latitude')}
        />
      </>
    );
  }
  

