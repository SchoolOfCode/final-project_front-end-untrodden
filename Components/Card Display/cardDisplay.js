import LocationCard from "../Location Card/locationCard";

// css
import styles from "../../styles/CardDisplay.module.css";

export default function CardDisplay({ allLocationData, pending }) {
  return (
    <div className={styles.display_container}>
      {allLocationData.length === 0 
        ? <div className={styles.noResultsContainer}>
        {!pending?
            <p className={styles.noResults}>
              Sorry, no results found.
              <br/><br/>
              Please try searching again with different filters (or adding a new place which has what you searched for!)
            </p>:
            <p className={styles.noResults}>
              Loading ... 
            </p>}
          </div>
        : allLocationData.map((location) => <LocationCard key={location.location_id} location={location} />)
      }
    </div>
  );
}
