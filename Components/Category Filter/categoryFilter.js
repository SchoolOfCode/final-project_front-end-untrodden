import styles from '../../styles/categoryFilter.module.css'

export default function CategoryFilter({setCategoryState,value}){
    let category = [
        {value:"category_seaside", label:"Seaside"} ,
        {value:"category_castles", label:"Castles"},
        {value:"category_caves", label:"Caves"},
        {value:"category_peaceful", label:"Peaceful"},
        {value:"category_hiking", label:"Hiking"},
        {value:"category_hills", label:"Hills"},
        {value:"category_historic", label:"Historic"},
        {value:"category_secluded", label:"Secluded"},
        {value:"category_casual", label:"Casual"},
        {value:"category_lakes", label:"Lake"},
        {value:"category_woods", label:"Woods"},
        {value:"category_busy", label:"Busy"},
      ]

    return<div> 
    <select className={styles.dropdown} onChange={e => setCategoryState(e.target.value)} value={value} id="category">
    <option value="0">Category:</option>
    {category.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option> )}
  </select>
  </div>
}