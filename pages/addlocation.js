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
            <label htmlFor="Location Address">Location Address</label>
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
              // type="text-area"
              id="locationDescription"
              {...register('locationDescription')}
            />
            {/* location category */}
            <label htmlFor="Location Category">Location category</label>
            <div className={styles.checkbox_container}>
              <div>
                <label htmlFor="seaside">Seaside</label>
                <input type="checkbox" id="seaside" {...register('seaside')} />
              </div>
              <div>
                <label htmlFor="castles">Castles</label>
                <input type="checkbox" id="castles" {...register('castles')} />
              </div>
              <div>
                <label htmlFor="caves">Caves</label>
                <input type="checkbox" id="caves" {...register('caves')} />
              </div>
              <div>
                <label htmlFor="peaceful">Peaceful</label>
                <input
                  type="checkbox"
                  id="peaceful"
                  {...register('peaceful')}
                />
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
