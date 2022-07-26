import styles from '../styles/addLocation.module.css';

export default function Addlocation() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Add Location</h1>
      <div className={styles.main_grid_container}>
        <div className={styles.grid_left}>
          <p>left</p>
        </div>
        <div className={styles.grid_right}>
          <p>right</p>
        </div>
      </div>
    </main>
  );
}
