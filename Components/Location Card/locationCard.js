import styles from '../../styles/LocationCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/button';
import Tooltip from '@mui/material/Tooltip';


export default function LocationCard({ location }) {
  const url = location.image_url
  const urlForSmallImage = url.slice(0, url.indexOf('upload') + 7) + 'c_scale,h_250/' + url.slice(url.indexOf('upload') + 7)
  
  return (
    <div className={styles.card}>
      <img
        className={styles.card_img}
        src={urlForSmallImage}
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
          <section className={styles.more_info_button}>
                   <Link href={`/location/${location.location_id}`}>
            <a className={styles.moreInfo} target="_blank" rel="noreferrer">
              <Button label="More Info" />
            </a>
          </Link>
          </section>
        </section>
      </section>
    </div>
  );
}
