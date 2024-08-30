import {Container, ThemeProvider, createTheme,} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerAppBar from "./components/drawer/DrawerAppBar";
import { useEffect, useState } from "react";
import {Outlet, useNavigate, redirect} from "react-router-dom";


const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
          backgroundColor: "#4980cc",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
});

function App() {
  const [searchValue,setSearchValue] =useState("")
  const navigate = useNavigate();
  
  useEffect(()=>{
    navigate("/machines");
  },[]);
  return (

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ padding: "0px !important", minHeight: "100vh", minWidth: "100vw" ,backgroundColor:"#E5EAE3"}}>
           <DrawerAppBar theme={theme} setSearchValue={setSearchValue} />
           <Outlet/>
        </Container>
      </ThemeProvider>
 
  );
}

export default App;
