"use client"
import React from "react";
import Box from "@mui/material/Box";
import styles from "./bg.module.css";
import Typography from "@mui/material/Typography";
import Carousell from "./Carousell";

const MyComponent = () => {
  return (
    <div>
      <div>
        <Box sx={{ position: "relative", }}>
          <Box className={styles.boxbg1}></Box>
          <Box className={styles.boxbg2}></Box>
          <Box
            sx={{
              position: "absolute",
              top: {xs:'15%',sm:'15%',md:'20%',lg:'20%'},
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography variant="body1" color="initial" className={styles.typo} >
            Happy pet and happy us.
            <br/>
            Everything Your Pet Needs.
            </Typography>
          </Box>
          <Box position='absolute' top='30%' left='0px' width='100%' sx={{mx:'10px'}}>
          <Typography variant="h2" color="initial" className={styles.dog} >
          Dog Feeding
          <Typography variant="body1" color="initial" className={styles.body1} sx={{mt:{xs:'0.7rem'}}}>
            Like kids, dogs love to beg. You can provide them with yummy food, but only occasionally. The treats should make up less than 10% of their daily diet. Giving them more treats would lead to pickiness and overweight. When offering food, refer to the content and research, research, research, the nutritional value of your pet’s food. Dry food is best since it helps the dog with digestion. It’s wise to add natural food supplements, such as healthy vegetables and fruits. Be aware there are many people foods that cause pet allergies. They can also cause damage to their internal organs and may be deadly.
</Typography>
            </Typography>
           
          <Typography variant="h2" color="initial" className={styles.dog} sx={{display:{xs:'none',md:'block'}}}>
          Hydrate your Pet!
          <Typography variant="body1" color="initial" className={styles.body1} sx={{mt:{xs:'0.7rem'},display:{xs:'none',md:'block'}}} >

Always keep your pets food and water bowl clean at all times. To prevent bacteria and other infectious microbes from contaminating your pet’s dishes, food, and/or water.

</Typography>
            </Typography>
           
          </Box>
         
        </Box>

        
      </div>
      <Box>
        <Carousell/>
        </Box>
    </div>
  );
};

export default MyComponent;
