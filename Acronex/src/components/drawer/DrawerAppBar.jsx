import { AppBar, InputBase, Avatar, ThemeProvider, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Importa el ícono de búsqueda



const DrawerAppBar = ({theme,setSearchValue}) => {
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
   
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <div
          style={{
            width: '100%',
            justifyContent: 'space-between',
            paddingLeft: '15px',
            paddingRight: '15px',
            display: 'flex',
            alignItems: 'center',
            padding:"0px 20px"
          }}
        >
          <div style={{width: '25%', display:"flex",alignItems:"center" ,marginTop:"6px"}}>
            <div>
          <img src="./logo.png" alt="Logo" style={{ width:"auto", height: '25px' }} />
          </div>
          <div style={{paddingTop: '2px'}}>
            <img src="./unimap.svg" alt="Logo" style={{ width:"auto", height: '30px' }} />
            </div>
          </div>
          <div style={{ height: '50px',flexGrow: 1, display: 'flex', justifyContent: 'center',  paddingTop: '10px',
                paddingBottom: '10px' }}>
            <InputBase
              placeholder="Buscar..."
              fullWidth
              onChange={handleSearchChange}
              sx={{
                backgroundColor: 'white',
          
                paddingLeft: '10px',
                paddingRight: '10px',
               
              }}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon color="action" /> 
                </InputAdornment>
              }
            />
          </div>
          <div style={{width: '25%', display:"flex", justifyContent: 'end'}}>
    
            <Avatar
  src="URL_DEL_AVATAR"
  alt="Avatar"
  sx={{
    width: 25,
    height: 25,
    fontSize: '10px',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
    color:"black"
  }}
>
  NN
</Avatar>


          </div>
        </div>
      </AppBar>
    </ThemeProvider>
  );
};

export default DrawerAppBar;
