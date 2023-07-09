"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
import bt1 from "../../public/images/bt1.png";
import bt2 from "../../public/images/bt2.png";
import bt3 from "../../public/images/bt3.png";
import bt4 from "../../public/images/bt4.png";
import bt5 from "../../public/images/bt5.png";

const PageSection = () => {
  const images = [bt1, bt2, bt3, bt4, bt5];
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#EAB2A0",
          height: { sm: "90vh", md: "70vh", lg: "70vh" },
        }}
        className={styles.box}
      >
        <Box className={styles.box1}>
          <Typography variant="h3">
            Pet Food Brand That Care for Your Pets
          </Typography>
          <Typography variant="body1">
            We are dedicated to providing you with access to brands that provide
            great-tasting ... Crave-ably flavorful savory and sweet foods, for
            every meal occasion, ...
          </Typography>
        </Box>
        <Box className={styles.box2}>
          <Image
            src="/images/petFood.png"
            width={400}
            height={400}
            objectFit="fit"
            layout="responsive"
            alt="Picture of the author"
            className="my-image"
          />
        </Box>
      </Box>
      <Box sx={{ m: {sm:'2px',md:'1rem',lg:'1rem'} }}>
        <Typography variant="h5" textAlign="center">
          Brands You Know and Trust
        </Typography>
        {/* <Box display="flex" justifyContent="space-between" sx={{maxWidth:'100%',maxHeight:'100%'}}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              layout="responsive"
              width={50} // Set the desired width of the image
              height={50} // Set the desired height of the image
            />
          ))}
        </Box>
      </Box> */}
       <Box display="flex" justifyContent="space-between" sx={{ maxWidth: "100%", maxHeight: "100%" }}>
          {images.map((image, index) => (
            <div key={index} className={styles.responsiveImageWrapper}>
              <Image
                src={image}
                alt={`Image ${index}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default PageSection;
