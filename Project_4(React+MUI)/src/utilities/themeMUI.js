import { createMuiTheme, createTheme } from "@mui/material";



export const themeMUI= createTheme({
  palette: {
    primary: {
      main: '#4db6ac', 
    },
    secondary: {
      main: '#fff',
    }
  },
  typography: {
    h6: {
      fontSize: 20,
      fontWeight: 400,
      textTransform: 'none',
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'none',
      color: '#fff'
    },
    body1: {
      fontSize: 15,
      fontWeight: 700,
      textTransform: 'none',
      color: '#fff'
    },
  },
})

