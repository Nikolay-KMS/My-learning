import styled from "@emotion/styled";
import { Drawer } from "@mui/material";



const drawerWidth = 260;

export const StyledDrawer = styled(Drawer)(() => ({
  width: drawerWidth,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    position: 'static',
    overflow: 'visible',
  },
}));