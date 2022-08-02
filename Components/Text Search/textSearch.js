import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({options, setDisplayedData, setSearchState,value}) {

let loctions = options.map(location=> location.location_name)


  return (
    <Autocomplete
    clearOnEscape
    value={value}
    onChange={(event, newValue) => {
    if(newValue === null){setDisplayedData(options); return}
        console.log(newValue)
    setSearchState(newValue)
    setDisplayedData([...options.filter(location =>location.location_name.includes(newValue))])}}
      disablePortal
      id="combo-box-demo"
      options={loctions}
      sx={{ width: 300,color:'#E8A941', fontSize:'1.2vw' }}
      renderInput={(params) => <TextField {...params} label="Locations" />}
    />
  );
}

