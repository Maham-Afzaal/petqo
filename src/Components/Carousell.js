"use client"
import React from "react";
import Carousel from "react-elastic-carousel";
import Box from '@mui/material/Box'
import styles from './carousel.module.css';

const Carousell = () => {
  
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px", // height of container changes from here
    width: "100%",
    backgroundColor: "#00008B",
    color: "#fff",
    margin: "0 15px",
    fontSize: "4em",
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <Box className={styles.carouselC} sx={{backgroundColor:'whitesmoke'}}>
        <Carousel breakPoints={breakPoints} style={{marginTop:'1rem'}} enableAutoPlay= 'true' autoPlaySpeed= '3000' showArrows= 'false'>
             {/* for showing only 1 item in one line do this instead below
        <Carousel itemsToShow={1}> */}
              <div style={{...divStyle,borderRadius:'14px'}} >

            <div className={styles.imageC} >
            <img className={styles.carouselI} src='https://images.squarespace-cdn.com/content/v1/631293bfe2295b3b04443db1/1662812507897-75RJ1HZLTA61IUZVWF5I/sgsgsgsg.jpg' alt="Image 8" width={400} height={400} style={{borderRadius:'14px'}}/>

            </div>
          </div>
              <div style={{...divStyle,marginTop:'30px',borderRadius:'14px'}} >

            <div className={styles.imageC} >
              <img className={styles.carouselI} src='https://cdn.shopify.com/s/files/1/1415/0728/files/HOW-LONG-DOES-DRY-FOOD-LAST-BLOG.jpg?v=1680184777' alt="Image 2" width={400} height={400} style={{borderRadius:'14px'}}/>
            </div>
          </div>
              <div style={{...divStyle,borderRadius:'14px'}} >

            <div className={styles.imageC} >
              <img className={styles.carouselI} src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-1136803403.png?crop=1.00xw:0.752xh;0,0.0817xh&resize=1200:*' alt="Image 3" width={400} height={400} style={{borderRadius:'14px'}}/>
            </div>
          </div>
              <div style={{...divStyle,marginTop:'30px',borderRadius:'14px'}}>

            <div className={styles.imageC}>
              <img className={styles.carouselI} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL42wyy5nhXaMVogpKwRUAxfl8uxT7d9yFA&usqp=CAU' alt="Image 4" width={400} height={400} style={{borderRadius:'14px'}}/>
            </div>
          </div>
          <div style={{...divStyle,borderRadius:'14px'}} >

            <div className={styles.imageC}>
              <img className={styles.carouselI} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjP9kUkB8R5yJ2Cu_sk9Bb0AeuyX1JSsrQg&usqp=CAU' alt="Image 5" width={400} height={400} style={{borderRadius:'14px'}}/>
            </div>
          </div>
              <div style={{...divStyle,marginTop:'30px',borderRadius:'14px'}}>

            <div className={styles.imageC}>
              <img className={styles.carouselI} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ibyqU3PMtTsPf8NBumigwzqNWmxrn9Ri7A&usqp=CAU'alt="Image 6" width={400} height={400} style={{borderRadius:'14px'}}/>
            </div>
          </div>
          <div style={{...divStyle,borderRadius:'14px'}} >

            <div className={styles.imageC}>
              <img className={styles.carouselI} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZ6Dplo_k5SpP-y2q_Oqwm588HC3DVU-waEzDsH61R2kHorOwzOQZe8jxR9ndgutiPrc&usqp=CAU'alt="Image 7" width={400} height={400}style={{borderRadius:'14px'}}/>
            </div>
          </div>
              <div style={{...divStyle,marginTop:'30px',borderRadius:'14px'}}>

            <div className={styles.imageC}>
            <img className={styles.carouselI} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveLYV2rYEUQC0pT2GzZaVXoRBVySVQBll2iFx29yWyp6ajROnjZ9GPf9KEOC5t7e4fFo&usqp=CAU' alt="Image 1" width={400} height={400} style={{borderRadius:'14px'}}/>
            </div>
          </div>
        </Carousel>
      </Box>
    </div>
  );
};

export default Carousell;
