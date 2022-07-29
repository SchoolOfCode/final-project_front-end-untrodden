import styles from '../../styles/LocationDisplayPage.module.css';
import Image from 'next/image';

export async function getStaticPaths() {
  const res = await fetch('https://untrodden.herokuapp.com/locations/');
  const data = await res.json();

  const paths = data.payload.map((location) => {
    return {
      params: { id: location.location_id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(id);
  const res = await fetch('https://untrodden.herokuapp.com/locations/' + id);
  const data = await res.json();
  console.log(data);
  return {
    props: { location: data.payload[0] },
  };
}

export default function LocationDisplayPage({ location }) {
  return (
  <div className={styles.location_page}>
      <img src={location.image_url} className={styles.image}></img>
    
      <section className={styles.amenities}>
        {location.amenities.map((amenity) => (
          <div className={styles.icon_description}>
            <img
              src={`/amenities_images/${amenity}.png`}
              height={24}
              width={24}
            />
            <p>{amenity}</p>
          </div>
        ))}
      </section>

      <h1>{location.location_name}</h1>
      <h3>Address</h3>
      <p>{location.street}</p>
      <p>{location.town}</p>
      <p>{location.region}</p>
      <p>{location.postcode}</p>
      <p>{location.location_description}</p>
    </div>
  );
}
