import styles from '../../styles/FilterBar.module.css'
import {useState} from 'react'
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';
//import Select from 'react-select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      color:'white',
      backgroundColor: '#225544',
    
    },
  },
};

let category = [
                "Seaside",
                "Castles",
                "Caves",
                "Peaceful",
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
                "South West"
              ]

let colours = [
              { value: 'parking', label: 'Parking' },
              { value: 'food', label: 'food' },
              { value: 'family', label: 'family'},
              { value: 'changing facilities', label: 'changing facilities'},
              { value: 'disability access', label: 'disability access'},
              { value: 'peaceful', label: 'peaceful'},
              { value: 'electric_charging', label: 'electric_charging'},
              { value: 'no_restaurants', label: 'no_restaurants'},
              { value: 'museums', label: 'museums' },
              { value: 'beach', label: 'beach',}]
let amenities = [ 
                "parking",
                "food",
                "family",
                "changing facilities",
                "disability access",
                "peaceful",
                "electric_charging",
                "no_restaurants",
                "museums",
                "beach",
                "hiking",
                "pet_friendly",
                "forests",
                "lots_of_wildlife",
                "watersports",
                "shopping",
                "bodies_of_water",
                "camping",
                "mountains",
                "hearing_loop",
                "public_transport_good",
                "public_transport_bad",
                "accommodation",
                "wifi",
]



export default function FilterBar(){

    const [regionState, setRegionState] = useState("")
    const [categoryState, setCategoryState] = useState("")
    const [amenity, setAmenity] = useState([]);

    function onChangeRegionState(){
       let region = document.getElementById("regions").value
                setRegionState(region)
        console.log(regionState)
    }

    function onChangeCategoryState(){
        let category = document.getElementById("category").value
        console.log(category)
                  setCategoryState(category)
         console.log(categoryState)
     }
  
      function handleChange (event) {
        const {
          target: { value },
        } = event;
        setAmenity(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

  

    return (<div className={styles.filterbar}>
       
<select className={styles.dropdown} id="regions" onChange={()=>onChangeRegionState()}>
  <option value="0">Region:</option>
  {regions.map(reg => <option value={reg}>{reg}</option>)}
</select>

<select className={styles.dropdown} id="category" onChange={()=>onChangeCategoryState()}>
  <option value="0">Category:</option>
  {category.map(cat => <option>{cat}</option> )}
</select>


{/*
<select className={styles.dropdown} id="amenities" >
  <option value="0">Amenities:</option>
  {amenities.map(amen => <option>{amen}</option>)}
</select>
*/}
<div>
      <FormControl sx={{ m: 1, width: 300, }}>
        <InputLabel id="demo-multiple-checkbox-label" style={{color:'white'}} >Amenities:</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={amenity}
          onChange={handleChange}
          input={<OutlinedInput label="Amenities:" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {amenities.map((amen) => (
            <MenuItem key={amen} value={amen}>
            <ListItemText primary={amen} />
              <Checkbox checked={amenity.indexOf(amen) > -1} />
             
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    


{
/*

  <Select
    defaultValue={null}
    isMulti
    name="Amenites"
    options={colours}
    className={styles.multi}
    classNamePrefix="Amenites"
  />

*/

}

<input className={styles.input} type='text' placeholder='Seach Locations'/>
    </div>
    )
}