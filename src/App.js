import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./pages/Dashboard";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const customPalette = {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#325FC6",
          light: "#E4FDE1",
        },
        secondary: {
          main: "#325FC6",
          light: "#F26430",
        },
        background: {
          default: "#FFFFFF",
          paper: "#FFFCF9",
        },
        text: {
          primary: "#2b2929",
          secondary: "rgba(222,219,219,0.7)",
        },
        divider: "rgba(249,202,202,0.12)",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#325FC6",
          light: "#456990",
        },
        secondary: {
          main: "#000000",
          light: "#525866",
        },
        background: {
          default: "#212529",
          paper: "#212121",
        },
        text: {
          primary: "#F6F4F3", //white smoke
          secondary: "#1d1b1bb3",
        },
        divider: "#1d1b1bb3",
      },
    },
  };

  const theme = createTheme(
    darkMode ? customPalette.dark : customPalette.light
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Dashboard />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

export function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <AppBar
      sx={{
        bgcolor: "secondary.main",
        px: { md: 5, xs: 1 },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            src="/logo.png"
            sx={{
              width: "35px",
            }}
            alt="Logo"
          />{" "}
          <Typography
            variant="h6"
            sx={{ pl: 2, display: { md: "block", xs: "none" } }}
          >
            SWoB Open Telemetry
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography variant="p" sx={{ p: 2 }}>
            Help
          </Typography>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <Brightness4Icon /> : <WbSunnyIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
