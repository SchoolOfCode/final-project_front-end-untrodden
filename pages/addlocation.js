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
          <div className={styles.grid_left}>
            <label htmlFor="locationName">Location Name:</label>
            <input
              type="text"
              id="locationName"
              {...register('locationName')}
            />
            <label htmlFor="locationAddress">
              Location Address
              <input
                type="text"
                id="locationAddress"
                placeholder="Street/Road"
                {...register('street')}
              />
              <input
                type="text"
                id="locationAdress"
                placeholder="Town"
                {...register('town')}
              />
              <input
                type="text"
                id="locationAdress"
                placeholder="Region"
                {...register('region')}
              />
              <input
                type="text"
                id="locationAdress"
                placeholder="Postcode"
                {...register('postcode')}
              />
            </label>

            {/* <label htmlFor="locationDescription">Location Description:</label>
            <textarea
              // type="text-area"
              id="locationDescription"
              {...register('locationDescription')}
            /> */}

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
        <button>Submit</button>
      </form>
    </main>
  );
}
