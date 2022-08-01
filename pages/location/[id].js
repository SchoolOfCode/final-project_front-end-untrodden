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
  <div className={styles.left_div}>
      <img src={location.image_url} className={styles.image}></img>
    
      <section className={styles.amenities}>
        {location.amenities.map((amenity) => (
          <div className={styles.icon_description}>
            <img className={styles.icon}
              src={`/amenities_images/${amenity}.png`}
              
            />
            <p>{amenity}</p>
          </div>
        ))}
      </section>
</div>
<div className={styles.right_div}>
      <h1>{location.location_name}</h1>
      console.log(location.location_name)
      <h3 className={styles.heading}>Address</h3>
      <p>{location.street}</p>
      console.log(location.street)
      <p>{location.town}</p>
      console.log(location.town)
      <p>{location.region}</p>
      console.log(location.region)
      <p>{location.postcode}</p>
      console.log(location.postcode)
      <h3 className={styles.heading}>Description</h3>
      <p>{location.location_description}</p>
      console.log(location.location_description)

  </div>   
    </div>
  );
}
