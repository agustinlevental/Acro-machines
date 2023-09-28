
import { CssBaseline, ThemeProvider, createTheme, Container } from '@mui/material';
import './App.css';
import DrawerAppBar from './components/drawer/DrawerAppBar';
import CardsContainer from './components/CardsContainer/CardsContainer';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          //hola
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
        <DrawerAppBar />
        <CardsContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
