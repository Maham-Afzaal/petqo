"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from "./nav.module.css";
import { Grid, Button, Card, CardMedia, CardContent } from "@mui/material";

const Test = () => {
  return (
    <div>
    <div style={{backgroundColor:'whitesmoke'}}>
      <Box
        className={styles.box}
      >
        <Box className={styles.box1}>
          <Typography variant="h3">
          How Your Subscription works
          </Typography>
          <Typography variant="body1">
          Pet Subscription makes sure that your pet does not run out of food.You can recive regular shipments. 
          </Typography>
        </Box>
        <Box className={styles.box2}>
          <Image
            src='/images/foodpic2.jpg'
            width={100}
            height={100}
            objectFit="fit"
            layout="responsive"
            alt="Picture of the author"
            className={styles.myImg}
          />
        </Box>
      </Box>
      <Box sx={{display:'flex',gap:'5px',py:'12px',px:{xs:'0',sm:'2rem',md:'2rem',lg:'2rem'},flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}}>
      <Box sx={{border:'1px solid #435B66',backgroundColor:'#eae4e9',padding:'10px',cursor:'pointer',borderRadius:'4px','&:hover':{
        backgroundColor:'#fde2e4',
      }}}>
        <Box className={styles.circle}>
          <Box className={styles.number}>1</Box>
        </Box>
        <Box>
          <Typography variant="h6">Tell us about your pup</Typography>
          <Typography variant="body2">
            Take our quick guiz and we'll create a customized, subscription meal
            plan designed
          </Typography>
        </Box>
      </Box>

 <Box sx={{border:'1px solid #435B66',backgroundColor:'#eae4e9',padding:'10px',cursor:'pointer',borderRadius:'4px','&:hover':{
        backgroundColor:'#fde2e4',
      }}}>        <Box className={styles.circle}>
          <Box className={styles.number}>2</Box>
        </Box>
        <Box>
          <Typography variant="h6">Get your starter box</Typography>
          <Typography variant="body2">
            We'll send you two weeks of freshly cooked food thatl put your pup
            on the path towards real, meaningful health benefits.
          </Typography>
        </Box>
      </Box>

 <Box sx={{border:'1px solid #435B66',backgroundColor:'#eae4e9',padding:'10px',cursor:'pointer',borderRadius:'4px','&:hover':{
        backgroundColor:'#fde2e4',
      }}}>        <Box className={styles.circle}>
          <Box className={styles.number}>3</Box>
        </Box>
        <Box>
          <Typography variant="h6">
            Receive regular, reliable deliveries
          </Typography>
          <Typography variant="body2">
            After your starter box, you'll receive regularly scheduled
            deliveries of fresh food right to your door
          </Typography>
        </Box>
      </Box>
      </Box>

      <Box>
      <Grid container spacing={2} sx={{py:'12px',px:{xs:'0',sm:'2rem',md:'2rem',lg:'2rem'}}}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 1"
              height={200}
              sx={{ objectFit: "contain" }}
              image="/images/food1.jpg"
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">Grain Friendly</Typography>
              <Typography variant="h5">Organic Chicken, Brown Rice</Typography>
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 2"
              height={200}
              image="/images/food2.jpg"
              sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">American Journey</Typography>
              <Typography variant="h5">
                Grain-Free Organic Chicken Bundle
              </Typography>
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 3"
              height={200}
              image="/images/food3.jpg"
              sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">Victor Purpose</Typography>
              <Typography variant="h5">
                Grain-Free Organic Salmon Bundle
              </Typography>{" "}
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

    <Box>
      <Grid container spacing={2} sx={{py:'12px',px:{xs:'0',sm:'2rem',md:'2rem',lg:'2rem'}}}>
        <Grid item xs={6} sm={3} lg={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 1"
              height={60}
              sx={{ objectFit: "contain" }}
              image="/images/icon1.png"
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">Nutritionally Made By Experts Loved By Cats Easy On The</Typography>
              <Typography variant="h5">Complete ER. Co Planet
</Typography>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 2"
              height={60}
              image="/images/icon2.png"
              sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">Nutritionally Made By Experts Loved By Cats Easy On The
</Typography>
              <Typography variant="h5">
              Complete ER. Co Planet

              </Typography>{" "}
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 3"
              height={60}
              image="/images/icon3.png"
              sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">Nutritionally Made By Experts Loved By Cats Easy On The
</Typography>
              <Typography variant="h5">
              Complete ER. Co Planet

              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",height: '100%',
            }}
          >
            <CardMedia
              component="img"
              alt="Image 1"
              height={60}
              sx={{ objectFit: "contain" }}
              image="/images/icon4.png"
            />
            <CardContent sx={{ flex: '1 0 auto',textAlign: "center" }}>
              <Typography variant="body1">Nutritionally Made By Experts Loved By Cats Easy On The</Typography>
              <Typography variant="h5">Complete ER. Co Planet
</Typography>
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
    </div>
  );
};

export default Test;
