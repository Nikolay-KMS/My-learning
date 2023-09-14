
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';
import { Menu } from '@mui/material';
import { useState } from 'react';

const StyledSelect = styled(Select)(() => ({
  color: '#fff',
  "& .MuiSelect-icon": {
    color: '#fff',
  },
  "& .MuiSelect-iconOpen ": {
    color: 'blue',
  },
}))

const StyledMenu = styled(Menu)(() => ({
  left: '-16px',
  // width: '318px',

}))

export function SelectVariants(props) {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: 'transparent',
        padding: 0,
        // width: '400px'
      },
    },
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <StyledSelect
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          label="Age"
          MenuProps={MenuProps}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          onOpen={handleClick}
          // onClose={handleClose}
          renderValue={(selected) => {
            return <em>Placeholder</em>;
          }}
        >
          <StyledMenu
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                color: '#fff',
                borderRadius: '12px',
                backgroundColor: 'transparent',
                borderTop: 'none',
                boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px 0px , rgba(255, 255, 255, 0.15) 0px 0px 0px 1px',
                minWidth: '318px',
              },
              "& .MuiList-root": {
                width: '318px',
                backgroundColor: '#000',
                "& .MuiMenuItem-root": {
                  '&:hover': {
                    backgroundColor: '#e7e9e01a',
                  },
                }
              }
            }}
            open={open}
            anchorEl={anchorEl}
          >
            <MenuItem value={10} >Ten</MenuItem>
            <MenuItem value={20} >Twenty</MenuItem>
            <MenuItem value={30} >Thirty</MenuItem>
          </StyledMenu>
        </StyledSelect>
      </FormControl>
    </div>
  );
}

