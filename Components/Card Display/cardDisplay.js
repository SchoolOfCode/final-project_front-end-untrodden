import LocationCard from "../Location Card/locationCard";
import styles from '../../styles/CardDisplay.module.css'

export default function CardDisplay ({allLocationData}){
    return <div className={styles.display_container}>
    {allLocationData.map(location =>  <LocationCard location={location} />)}
   
    </div>
}