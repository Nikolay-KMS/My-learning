import { useState } from "react";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import { Button, ListItemButton, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import MoreIcon from '@mui/icons-material/More';
import { StyledDrawer } from "./botstrapComponents/StyledDrawer";
import { StyledList } from "./botstrapComponents/StyledList";
import { StyledListItem } from "./botstrapComponents/StyledListItem";
import { StyledListItemButton } from "./botstrapComponents/StyledListItemButton";
import { StyledListItemIcon } from "./botstrapComponents/StyledListItemIcon";
import { SelectVariants } from "./botstrapComponents/trash/SelectVariants";
import { BasicModal } from "./botstrapComponents/BasicModal";

export const CustomStyledListItem = styled(ListItem)(() => ({
  width: '218px',
}));

export const CustomStyledListItemButton = styled(ListItemButton)(() => ({
  borderRadius: '100px',
  backgroundColor: '#1d9bf0',
  marginTop: '18px',

  "& .MuiTypography-root": {
    margin: '0 auto',
  },
  "&:hover": {
    backgroundColor: '#167fc5'
  },
}));

export const CustomButton = styled(Button)(() => ({
  height: '52px',
  borderRadius: '99px',
  boxSizing: "border-box",
  display: 'block',
  paddingLeft: '32px',
  paddingRight: '32px',
  fontSize: '17px',
}))

export function SideBar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => {
    event.target.className.includes('MuiBackdrop') ? handleClose() : handleClickOpen();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClick2 = () => {
    setOpen2(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <StyledList>
        {[['', <TwitterIcon />], ['Home', <HomeIcon />], ['Explore', <SearchIcon />], ['Notifications', <NotificationsIcon />], ['Messages', <MailOutlineIcon />],
        ['Lists', <ListAltIcon />], ['Bookmarks', <BookmarkBorderIcon />], ['Communities', <PeopleIcon />], ['Verified', <TwitterIcon />],
        ['Profile', <PersonIcon />]].map(([text, icon]) => (

          <StyledListItem key={text} disablePadding>
            <StyledListItemButton
              disableRipple
              onClick={() => console.log(3)}
            >
              <StyledListItemIcon >
                {icon}
              </StyledListItemIcon>
              <Typography variant="h6">
                {text}
              </Typography>
            </StyledListItemButton>
          </StyledListItem>
        ))}

        <StyledListItem disablePadding>
          <StyledListItemButton
            disableRipple
            onClick={handleClick}
          >
            <BasicModal
              text="More"
              open={open}
              handleClose={handleClick}
            />
            <StyledListItemIcon >
              <MoreIcon />
            </StyledListItemIcon>
            <Typography variant="h6" >More</Typography>

          </StyledListItemButton>
        </StyledListItem>

        <CustomStyledListItem disablePadding>
          <CustomStyledListItemButton disableRipple >
            <Typography variant="subtitle2" color="third" >
              Post
            </Typography>
          </CustomStyledListItemButton>
        </CustomStyledListItem>

      </StyledList>
    </StyledDrawer>
  );
}







