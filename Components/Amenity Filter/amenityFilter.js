import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

// css
import styles from "../../styles/AmenityFilter.module.css";

//import Select from 'react-select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      color: "white",
      backgroundColor: "#225544",
      
    
    },
  },
};

export default function AmenityFilter ({setAmenityState,value}){


    let amenities = [ 
        {value:"amenities_parking", label:"Parking"},
        {value:"amenities_food", label:"Food"},
        {value:"amenities_family", label:"Family"},
        {value:"amenities_changing_facilities", label:"Changing facilities"},
        {value:"amenities_disability_access", label:"Disability access"},
        {value:"amenities_peaceful", label:"Peaceful"},
        {value:"amenities_electric_charging", label:"Electric charging"},
        {value:"amenities_no_resturants", label:"No restaurants"},
        {value:"amenities_museums", label:"Museums"},
        {value:"amenities_beach", label:"Beach"},
        {value:"amenities_hiking", label:"Hiking"},
        {value:"amenities_pet_friendly", label:"Pet friendly"},
        {value:"amenities_forests", label:"Forests"},
        {value:"amenities_lots_of_wildlife", label:"Lots of wildlife"},
        {value:"amenities_watersports", label:"Watersports"},
        {value:"amenities_shopping", label:"Shopping"},
        {value:"amenities_bodies_of_water", label:"Bodies of water"},
        {value:"amenities_camping", label:"Camping"},
        {value:"amenities_moutains", label:"Mountains"},
        {value:"amenities_hearing_loop", label:"Hearing loop"},
        {value:"amenities_public_transport_good", label:"Public transport good"},
        {value:"amenities_public_transport_bad", label:"Public transport bad"},
        {value:"amenities_accommodation", label:"Accommodation"},
        {value:"amenities_wifi", label:"Wifi"},
      ]
      

return <div className={styles.amenities_filter}>
<FormControl sx={{ m: 0.5, width: '15vw' }}>
  <InputLabel id="demo-multiple-checkbox-label" 
  sx={{
    width: 300,
    color: 'success.main',
    '& .MuiSelect-outlined': {
      border: 'blue',
    },
  }}
  style={{color:'#E8A941', fontSize:'1.2vw',}} >Amenities:</InputLabel>
  <Select
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={value}
    onChange={e => setAmenityState(e.target.value)}
    input={<OutlinedInput sx={{
    width: 250,
    notchedOutline:'blue',
    
    '& .MuiOutlinedInput-root': {
      color: 'blue',
    },
  }} label="Amenities:" />}
    renderValue={(selected) => {
      let selectedAms = [] 
      for (let i = 0; i < selected.length; i++) {
        selectedAms.push(selected[i].slice(10))
      }
      for (let i = 0; i < selectedAms.length; i++) {
        selectedAms[i] = selectedAms[i].replaceAll(/_/g, ' ');
        selectedAms[i] = selectedAms[i].charAt(0).toUpperCase() + selectedAms[i].slice(1);
      }
      return selectedAms.join(', ')
    }}
    MenuProps={MenuProps}
    style={{color:'white'}}
  >
    {amenities.map((amen) => (
      <MenuItem key={amen.value} value={amen.value}>
      <ListItemText primary={amen.label} />
        <Checkbox style={{color:'white'}} checked={value.indexOf(amen.value) > -1} />
       
      </MenuItem>
    ))}
  </Select>
</FormControl>
</div>
}

// MuiSelect-select MuiSelect-outlined MuiSelect-multiple MuiOutlinedInput-input MuiInputBase-input