import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function LocationFilter({
  options,
  setDisplayedData,
  setSearchState,
  value,
}) {
  let loctions = options.map((location) => location.location_name);

  return (<div>
   
    <Autocomplete
      clearOnEscape
      value={value}
      onChange={(event, newValue) => {
        if (newValue === null) {
          setDisplayedData(options);
          return;
        }
        console.log(newValue);
        setSearchState(newValue);
        setDisplayedData([
          ...options.filter((location) =>
            location.location_name.includes(newValue)
          ),
        ]);
      }}
      
      id="combo-box-demo"
      options={loctions}
      sx={{ width:'12vw'}}
      renderInput={(params) => 
                <TextField {...params} 
                sx={{ 
                      '& .MuiOutlinedInput-root':{color:'white', '& > fieldset': {border: 'none'}}, 
                      '& .MuiInputLabel-root':{color: '#e8a941',  fontSize:'1.2vw'},
                      '& .MuiSvgIcon-root':{color: '#e8a941'}
                      
                      }}
                label="Locations:" />}
              />
    
    </div>
  );
}
