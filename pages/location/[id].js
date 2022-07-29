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
    <div>
      <h1>hello</h1>
      <p>{location.location_name}</p>
      <p>{location.street}</p>
    </div>
  );
}
