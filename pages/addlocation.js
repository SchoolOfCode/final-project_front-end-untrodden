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
                    id="seaside"
                    {...register('seaside')}
                  />
                  <span>Seaside</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="castles"
                    {...register('castles')}
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
                    id="peaceful"
                    {...register('peaceful')}
                  />
                  <span>Peaceful</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="hiking" {...register('hiking')} />
                  <span>Hiking</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="hills" {...register('hills')} />
                  <span>Hills</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="historic"
                    {...register('historic')}
                  />
                  <span>Historic</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input
                    type="checkbox"
                    id="secluded"
                    {...register('secluded')}
                  />
                  <span>Secluded</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="casual" {...register('casual')} />
                  <span>Casual</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="lake" {...register('lake')} />
                  <span>Lake</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="busy" {...register('busy')} />
                  <span>Busy</span>
                </label>
              </div>
              <div className={`${styles.location_category} ${styles.checked}`}>
                <label>
                  <input type="checkbox" id="woods" {...register('woods')} />
                  <span>Woods</span>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.grid_right}>
            {/* <label
              htmlFor="testing"
              type="text"
              id="testing"
              {...register('testing', { required: true, maxLength: 20 })}
            /> */}
            <p>right</p>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.btn}>Add Location</button>
        </div>
      </form>
    </main>
  );
}
