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
import { HeadProvider } from "react-head";

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
          main: "#101418",
          light: "#456990",
        },
        secondary: {
          main: "#101418",
          light: "#525866",
        },
        background: {
          default: "#101418",
          paper: "#0A233D",
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
    <HeadProvider>
      <div className="Home">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.anychart.com/releases/8.9.0/css/anychart-ui.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.anychart.com/releases/8.9.0/fonts/css/anychart-font.min.css"
        ></link>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Dashboard />
          <Footer />
          <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js"></script>
          <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-map.min.js"></script>
          <script src="https://cdn.anychart.com/geodata/latest/custom/world/world.js"></script>
          <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-data-adapter.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js"></script>
          <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-exports.min.js"></script>
          <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-ui.min.js"></script>
          <script src="https://cdn.anychart.com/themes/2.0.0/dark_blue.min.js"></script>
        </ThemeProvider>
      </div>
    </HeadProvider>
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
