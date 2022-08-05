import styles from '../../styles/LocationCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/button';
import Tooltip from '@mui/material/Tooltip';

//get props to location page

export default function LocationCard({ location }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_img}
        src={location.image_url}
        alt="Location"
      />
      <section className={styles.card_details}>
        <h3 className={styles.title}>{location.location_name}</h3>
        <p className={styles.description}>{location.location_description}</p>
        <section className={styles.amenities_button}>
          <section className={styles.amenities}>
            {location.amenities.map((amenity) => (
              <Tooltip
                title={(
                  amenity.charAt(10).toUpperCase() + amenity.slice(11)
                ).replaceAll(/_/g, ' ')}
              >
                <img
                  key={amenity}
                  src={`/amenities_images/${amenity}.png`}
                  height={24}
                  width={24}
                  alt={amenity}
                />
              </Tooltip>
            ))}
          </section>
          <Link href={`/location/${location.location_id}`}>
            <a className={styles.moreInfo} target="_blank" rel="noreferrer">
              <Button label="More Info" />
            </a>
          </Link>
        </section>
      </section>
    </div>
  );
}
