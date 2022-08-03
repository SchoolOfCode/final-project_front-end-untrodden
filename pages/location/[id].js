import Image from "next/image";

// css
import styles from "../../styles/LocationDisplayPage.module.css";

//map stuff
import MapLocationPage from "../../Components/MapLocationPage/mapLocationPage";
import dynamic from "next/dynamic";

export async function getStaticPaths() {
  const res = await fetch("https://untrodden.herokuapp.com/locations/");
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
  const res = await fetch("https://untrodden.herokuapp.com/locations/" + id);
  const data = await res.json();
  console.log(data);
  return {
    props: { location: data.payload },
  };
}

export default function LocationDisplayPage({ location }) {
  return (
    <>
      <div className={styles.location_page}>
        <div className={styles.left_div}>
          <img src={location[0].image_url} className={styles.image}></img>

          <section className={styles.amenities}>
            {location[0].amenities.map((amenity) => (
              <div className={styles.icon_description}>
                <img
                  className={styles.icon}
                  src={`/amenities_images/${amenity}.png`}
                />
                <p>{amenity}</p>
              </div>
            ))}
          </section>
        </div>
        <div className={styles.right_div}>
          <h1>{location[0].location_name}</h1>
          <h3 className={styles.heading}>Address</h3>
          <p>{location[0].street}</p>
          <p>{location[0].town}</p>
          <p>{location[0].region}</p>
          <p>{location[0].postcode}</p>
          <h3 className={styles.heading}>Description</h3>
          <p>{location[0].location_description}</p>
        </div>
      </div>
      <MapLocationPage location={location} />
    </>
  );
}
