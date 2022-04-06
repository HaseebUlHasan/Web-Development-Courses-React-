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
          <Link to="/html" className="link">
            {" "}
            HTML{" "}
          </Link>
          <Link to="/css" className="link">
            {" "}
            CSS{" "}
          </Link>
          <Link to="/js" className="link">
            {" "}
            JavaScrit{" "}
          </Link>
          <Link to="/git" className="link">
            {" "}
            Git{" "}
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
