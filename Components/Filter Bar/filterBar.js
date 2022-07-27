import styles from '../../styles/FilterBar.module.css'
import {useState} from 'react'

let catagory = [
                "Seaside",
                "Castles",
                "Caves",
                "Peacful",
                "Hiking",
                "Hills",
                "Historic",
                "Secluded",
                "Casual",
                "Lake",
                "Woods",
                "Busy",
]
let regions = [
                "London",
                "North East",
                "North West", 
                "Yorkshire", 
                "East Midlands", 
                "West Midlands", 
                "South East", 
                "East of England",
                "South West"]

let amenities = []



export default function FilterBar(){

    const [regionState, setRegionState] = useState("")
    const [catagoryState, setCatagoryState] = useState("")

    function onChangeRegionState(){
       let region = document.getElementById("regions").value
                setRegionState(region)
        console.log(regionState)
    }

    function onChangeCatagoryState(){
        let catagory = document.getElementById("catagory").value
                  setCatagoryState(catagory)
         console.log(catagoryState)
     }


    return <div className={styles.filterbar}>
       
<select className={styles.dropdown} id="regions" onChange={()=>onChangeRegionState()}>
  <option  value="0">Region:</option>
  {regions.map(reg => <option value={reg}>{reg}</option>)}
</select>

<select className={styles.dropdown} id="catagory" onChange={()=>onChangeCatagoryState()}>
  <option value="0">Catagory:</option>
  {catagory.map(cat => <option>{cat}</option> )}
</select>

<select className={styles.dropdown} id="amenities" >
  <option value="0">Amenities:</option>
  {amenities.map(amen => <option>{amen}</option> )}
</select>

<input className={styles.input} type='text' placeholder='Seach Locations'/>
    </div>

}