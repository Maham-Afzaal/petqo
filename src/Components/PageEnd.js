"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
import {
  Grid,
  Button,
  Card,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import React from 'react'

const PageEnd = () => {
  return (
    <div style={{margin:{xs:'0',sm:'0',md:'2rem',lg:'2rem'}}}>
      <Accordion sx={{ backgroundColor: "#c2c5aa" }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Puppy Food and Adult Dog Food are NOT Equal
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Puppy foods are very different from adult dog food and have more vitamins and calories than adult dog food. Your puppy must eat this food until 12 months.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{ backgroundColor: "#E8A9A9" }}
        >
          <Typography variant="h6">Dog Activity and Feeding
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          You can feed your adult dog once or twice a day. Keep track of your dog’s activity. If your dog is active on the lawn most of the day, he may need additional food to maintain a healthy weight. If he sleeps most of the day, he may need less than average. Even if a dog loses all his body fat and more than 50% of the vitamins, he can survive. However, water makes up more than 50% of their body weight and they could die if they lose only one-tenth of the water in their body. Always make sure your fur-buddy has water available and stays hydrated.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#C3ACD0" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{ backgroundColor: "E3DFFD" }}
        >
          <Typography variant="h6">Change food Gradually
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Even though it might seem boring to eat the same food, switching food fast can lead to problems. To change the diet, blend the new diet with the old and make a gradual change. However, do not change too quickly and often since it might make your dog a picky eater. Always look for the message “complete and balanced nutrition” when purchasing the food for your dog. This will indicate that the food has the required vitamins and calories.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#84c0c6" }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Check your Pet’s Food
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Always check your pet’s food for bugs, worms, larva, and/or parasites. Manufactured dry and/or wet pet food can be under-cooked and/or contaminated with creepy, crawly things that are not always visible to the eye. But can develop over a period of time and becomes visible. By then it may be too late for your pet. If you discover contaminated food, be a good citizen and report the contaminated pet food to the manufacturers and the FDA. Demand a recall for the contaminated and/or deadly food. You could save a pet’s life.


          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PageEnd