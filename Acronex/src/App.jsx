import {
  Container, ThemeProvider, createTheme,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./redux/store";
import { Provider } from "react-redux";
import DrawerAppBar from "./components/drawer/DrawerAppBar";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import { useState } from "react";
import MachineDescription from "./components/machineDescription/MachineDescription";

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
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ padding: "0px !important",backgroundColor:"#e4e4e4" }}>
           <DrawerAppBar theme={theme} setSearchValue={setSearchValue} />
          <CardsContainer searchValue={searchValue}/>
          {/* <MachineDescription/> */}
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
