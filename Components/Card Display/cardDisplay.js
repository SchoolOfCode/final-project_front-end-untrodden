import LocationCard from "../Location Card/locationCard";
import styles from '../../styles/CardDisplay.module.css'

export default function CardDisplay (){
    return <div className={styles.display_container}>
    <LocationCard/>
    <LocationCard/>
    <LocationCard/>
    </div>
}