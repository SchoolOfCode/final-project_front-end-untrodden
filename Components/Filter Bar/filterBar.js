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
               {value:" category_seaside", label:"Seaside"} ,
                {value:"category_castles", label:"Castles"},
                {value:"category_caves", label:"Caves"},
                {value:"category_peaceful", label:"Peaceful"},
                {value:"category_hiking", label:"Hiking"},
                {value:"category_hills", label:"Hills"},
                {value:"category_historic", label:"Historic"},
                {value:"category_secluded", label:"Secluded"},
                {value:"category_casual", label:"Casual"},
                {value:"category_lakes", label:"Lake"},
                {value:"category_busy", label:"Woods"},
                {value:"category_woods", label:"Busy"},
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


let amenities = [ 
                "Parking",
                "Food",
                "Family",
                "Changing facilities",
                "Disability access",
                "Peaceful",
                "Electric charging",
                "No restaurants",
                "Museums",
                "Beach",
                "Hiking",
                "Pet friendly",
                "Forests",
                "Lots of wildlife",
                "Watersports",
                "Shopping",
                "Bodies of water",
                "Camping",
                "Mountains",
                "Hearing loop",
                "Public transport good",
                "Public transport bad",
                "Accommodation",
                "Wifi",
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
        console.log(categoryState)
      };

  

    return (<div className={styles.filterbar}>
       
<select className={styles.dropdown} id="regions" onChange={()=>onChangeRegionState()}>
  <option value="0">Region:</option>
  {regions.map(reg => <option value={reg}>{reg}</option>)}
</select>




<div className={styles.amenities_filter}>
      <FormControl sx={{ m: 0.5, width: '15vw' }}>
        <InputLabel id="demo-multiple-checkbox-label" style={{color:'#E8A941', fontSize:'1.2vw',}} >Amenities:</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={amenity}
          onChange={handleChange}
          input={<OutlinedInput label="Amenities:" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          style={{color:'white'}}
        >
          {amenities.map((amen) => (
            <MenuItem key={amen} value={amen}>
            <ListItemText primary={amen} />
              <Checkbox style={{color:'white'}} checked={amenity.indexOf(amen) > -1} />
             
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    



<input className={styles.input} type='text' placeholder='Seach Locations'/>
    </div>
    )
}