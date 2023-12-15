import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { ThemeProvider, createTheme } from "@mui/material";
import { mainLayoutStyle } from "./styles";
import "./layout.scss";
import Header from "../components/header";

export function MainLayout(props) {
  const [theme, setTheme] = useState({
    palette: {
      primary: {
        main: "#101010",
      },
      secondary: {
        main: "#FBFBFB",
      },
    },
  });

  const muiTheme = createTheme(theme, {
    setTheme,
  });

  const classes = mainLayoutStyle();

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <div className={`${classes.Root} mb-5`}>
          <Sidebar />

          <main id="main" className={`${classes.Content}`}>
            <Header />
            {props.children}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
