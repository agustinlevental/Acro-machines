import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
} from "@mui/material";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import DrawerAppBar from "./components/drawer/DrawerAppBar";
import CardsContainer from "./components/CardsContainer/CardsContainer";

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
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
          <DrawerAppBar theme={theme} />
          <CardsContainer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
