import styled from "@emotion/styled";
import { ListItemButton } from "@mui/material";


export const StyledListItemButton = styled(ListItemButton)(() => ({
  borderRadius: '100px',
  height: '56px',
  "&:hover": {
    backgroundColor: '#e7e9e01a',
  },
}));