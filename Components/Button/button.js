import styles from '../../styles/button.module.css'
export default function Button ({onClick, label}){
    return <button onClick={onClick} className={styles.button}><strong>{label}</strong></button>
}