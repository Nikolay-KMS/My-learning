import styled from "@emotion/styled";
import { ListItem } from "@mui/material";


export const StyledListItem = styled(ListItem)(() => ({
  "& .MuiListItemButton-root": {
    "&:hover": {
      // backgroundColor: 'red'
    }
  }
}));