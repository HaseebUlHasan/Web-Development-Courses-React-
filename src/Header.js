import React  from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Outlet, NavLink  } from "react-router-dom";
 import Cloudtek from "./cloudtek.jpg"


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
        <NavLink to = "/general">
        <img src={Cloudtek} style={{ width: "50%"  , display:"block" , marginLeft :"auto" , marginRight :"auto" }} />
        </NavLink>
        <List>
          <br /> <br />
         
          <NavLink  to="/general" className='link' activeClassName="active">
           General Standards
          </NavLink >
          <NavLink  to="/css" className='link' activeClassName="active" >
            CSS
          </NavLink >
          <NavLink  to="/scss" className='link' activeClassName="active" >
             SCSS/SASS
          </NavLink >
          <NavLink  to="/html5" className='link' activeClassName="active" >
            HTML5
          </NavLink >
          
          <NavLink to="/js" className='link' activeClassName="active" >
            JS
          </NavLink>
          
          <NavLink to="/rtf" className='link' activeClassName="active">
             RTF Fields
          </NavLink>
          
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
