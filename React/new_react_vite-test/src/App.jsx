import React, { useState } from 'react';
import  useMinimalSelectStyles  from './useMinimalSelectStyles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const App = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
    )};

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    // getContentAnchorEl: null
  };


  return (
    <FormControl>
      <Select
        // disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>Principle</MenuItem>
        <MenuItem value={1}>Sketch</MenuItem>
        <MenuItem value={2}>Photoshop</MenuItem>
        <MenuItem value={3}>Framer</MenuItem>
      </Select>
    </FormControl>
  );
};


export default App;