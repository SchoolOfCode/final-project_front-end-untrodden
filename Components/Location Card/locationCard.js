import styles from '../../styles/LocationCard.module.css'
import Image from 'next/image'
import Link from 'next/link'


//get props to location page

export default function LocationCard ({location}){
    return <div className={styles.card}>
        <img className={styles.card_img} src={location.image_url}  alt="Location" />
        <section className={styles.card_details}>
                <h3 className={styles.title}>{location.location_name}</h3>
                <p className={styles.description}>{location.location_description}</p>
            <section className={styles.amenities_button}>        
                <section className={styles.amenities}>

                  {location.amenities.map(amenity =><img src={`/amenities_images/${amenity}.png`} height={24} width={24} />)}  
                    
                    </section>
                <Link href={`/location/${location.location_id}`}><button className={styles.button}>More Info</button></Link>
            </section>

        </section>
    </div>
}