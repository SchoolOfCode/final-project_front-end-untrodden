import LocationCard from "../Location Card/locationCard";

// css
import styles from "../../styles/CardDisplay.module.css";

export default function CardDisplay({ allLocationData }) {
  return (
    <div className={styles.display_container}>
      {allLocationData.map((location) => (
        <LocationCard key={location.location_id} location={location} />
      ))}
    </div>
  );
}
