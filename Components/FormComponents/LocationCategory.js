import styles from '../../styles/addLocation.module.css';

export default function LocationCategory({ register }) {
  return (
    <>
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
    </>
  );
}
