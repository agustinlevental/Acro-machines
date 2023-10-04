import {AppBar,InputBase,Avatar,ThemeProvider,InputAdornment,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./DrawerAppBar.module.css";
import { useSubmit } from "react-router-dom";

const DrawerAppBar = ({ theme }) => {
  const submit = useSubmit()

  const handleSearchChange = (event) => {
    submit({searchValue: event.target.value}, {method: "get", action: "/machines"});
  };
  
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <div className={styles.drawerAppBarContainer}>
          <div className={styles.leftDrawerAppBar}>
            <div>
              <img
                className={styles.logoDrawerAppBar}
                src="./logo.png"
                alt="Logo"
              />
            </div>
            <div className={styles.unimapContainer}>
              <img
                className={styles.unimapLogo}
                src="./unimap.svg"
                alt="Logo"
              />
            </div>
          </div>
          <div className={styles.centerDrawerAppBar}>
            <InputBase
              placeholder="Buscar..."
              fullWidth
              onChange={handleSearchChange}
              className={styles.inputBase}
              sx={{
                backgroundColor: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon color="action" />
                </InputAdornment>
              }
            />
          </div>
          <div className={styles.rigthDrawerAppBar}>
            <Avatar
              src="URL_DEL_AVATAR"
              alt="Avatar"
              sx={{
                width: 25,
                height: 25,
                fontSize: "10px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                color: "black",
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
