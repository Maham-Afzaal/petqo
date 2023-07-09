"use client"
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import styles from "./nav.module.css";
import PageEnd from "./PageEnd";
function NavBar() {
 
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor:'whitesmoke' }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignContent="center"
          >
            <Image
              src="/images/petIcon.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />

            <Typography variant="body1" className={styles.nav}>
              PetQo
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">

          <Button variant="text"  disableElevation disableRipple sx={{ backgroundColor: "transparent",fontWeight:'bold', "&:hover": {   backgroundColor: "transparent",   color: "#2D4356",},}}>
              Home
            </Button>
           </Link>
           <Link href="/about">

            <Button  variant="text" disableElevation disableRipple sx={{ backgroundColor: "transparent",fontWeight:'bold', "&:hover": {   backgroundColor: "transparent",   color: "#2D4356",},}}>
              About Us
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
