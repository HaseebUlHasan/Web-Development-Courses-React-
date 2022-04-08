import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link, Outlet } from "react-router-dom";
import cloudtek from "./cloudtek.jpg";


const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={cloudtek} style={{ width: "50%"  , display:"block" , marginLeft :"auto" , marginRight :"auto" }} />
        <List>
          <br /> <br />
          <Link to="/general" className="link">
            {" "}
            General Standards{" "}
          </Link>
          <Link to="/css" className="link">
            {" "}
            CSS{" "}
          </Link>
          <Link to="/scss" className="link">
            {" "}
             SCSS/SASS
          </Link>
          <Link to="/html" className="link">
            {" "}
            HTML5{" "}
          </Link>
          
          <Link to="/js" className="link">
            {" "}
            JS{" "}
          </Link>
          
          <Link to="/field" className="link">
            {" "}
             RTF Fields
          </Link>
          
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 6, bgcolor: "background.default", p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
