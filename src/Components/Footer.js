'use client'
import React from 'react'
import Box from '@mui/material/Box';
import {  Typography } from '@mui/material';
import styles from "./nav.module.css";
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div>
    <div style={{backgroundColor:'#faedcd',padding:'2rem',display:'flex',justifyContent:'space-between',flexWrap:'wrap',margin:{xs:'0',sm:'0',md:'2rem',lg:'2rem'}}}>
        <Box>
            <Typography variant='body1'>@2021 uihui.com | Privacy Terms Contact us</Typography>
        </Box>
        <Box>
                <InstagramIcon/>
            
                <YouTubeIcon/>
            
                <FacebookIcon/>
            
                <LinkedInIcon/>
            
        </Box>
        </div>
    </div>
  )
}

export default Footer