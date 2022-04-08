import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { Link, Outlet } from "react-router-dom";
import cloudtek from "./cloudtek.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
const drawerWidth = 240;
export default function ButtonAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
         <strong>  Coding Standards/Practices</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 3, bgcolor: "background.default", p: 3 }}
      >
        <Header />
      </Box>
    </Box>
  );
}
