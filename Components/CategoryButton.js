import styles from "../styles/addLocation.module.css"

function CategoryButton(props){
    return(
        <div className={`${styles.location_category} ${styles.checked}`}>
        <label>
          <input
            type="checkbox"
            id={props.id}
            {...props.register(props.id)}
          />
          <span>{props.name}</span>
        </label>
      </div>
    )
}

export default CategoryButton