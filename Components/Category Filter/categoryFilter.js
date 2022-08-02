import styles from '../../styles/categoryFilter.module.css'

export default function CategoryFilter({category}){


    return<div> 
    <select className={styles.dropdown} id="category">
    <option value="0">Category:</option>
    {category.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option> )}
  </select>
  </div>
}