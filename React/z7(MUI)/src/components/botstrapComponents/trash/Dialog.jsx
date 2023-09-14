import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import styled from '@emotion/styled';
import { Divider, Drawer, ListItemIcon, Select } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const StyledDrawer = styled(Drawer)(() => ({
  width: '200px',
  "& .MuiDrawer-paper": {
    width: '200px',
    boxSizing: "border-box",
    position: 'static',
  },
}));

const StyledList = styled(List)(() => ({
  backgroundColor: '#251f1f',
  height: '100%',
  color: 'rgb(231, 233, 234)',
}));

const StyledListItem = styled(ListItem)(() => ({
}));

const CustomStyledListItem = styled(ListItem)(() => ({
  width: '218px',
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  borderRadius: '100px',
  "&:hover": {
    backgroundColor: '#e7e9e01a',
  },
}));

const CustomStyledListItemButton = styled(ListItemButton)(() => ({
  borderRadius: '100px',
  backgroundColor: '#1d9bf0',
  "& .MuiTypography-root": {
    margin: '0 auto'
  },
  "&:hover": {
    backgroundColor: '#167fc5'
  },
}));


const StyledListItemIcon = styled(ListItemIcon)(() => ({
  color: 'rgb(231, 233, 234)',
}));

export function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog variant="permanent" anchor="left" open={open} onClick={handleClose}>
      <StyledList>
        {[['', <TwitterIcon />], ['Home', <HomeIcon />]].map(([text, icon]) => (
          <StyledListItem key={text} disablePadding>
            <StyledListItemButton disableRipple onClick={()=> console.log(1)}>
              <StyledListItemIcon >
                {icon}
              </StyledListItemIcon>
              <Typography variant="h6" >
                {text}
              </Typography>
            </StyledListItemButton>
          </StyledListItem>
        ))}

          {/* <br/> */}

        <CustomStyledListItem disablePadding>
          <CustomStyledListItemButton disableRipple >
            <Typography variant="subtitle2" color="third" >
              Post
            </Typography>
          </CustomStyledListItemButton>
        </CustomStyledListItem>

      </StyledList>
      <Divider />

      <StyledList>
      <CustomStyledListItem disablePadding>
          <CustomStyledListItemButton disableRipple >
            <Typography variant="subtitle2" color="third" >
              Post
            </Typography>
          </CustomStyledListItemButton>
        </CustomStyledListItem>
        <CustomStyledListItem disablePadding>
          <CustomStyledListItemButton disableRipple >
            <Typography variant="subtitle2" color="third" >
              Post
            </Typography>
          </CustomStyledListItemButton>
        </CustomStyledListItem>

      </StyledList>

    </Dialog>

    // <Select ></>
  );
}
