import styles from '../../styles/button.module.css'
export default function Button ({label}){
    return <button className={styles.button}><strong>{label}</strong></button>
}