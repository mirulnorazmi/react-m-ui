import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import './HeroSection.css';
import img1 from '../images/img-1.jpeg';
import Typography from '@material-ui/core/Typography'; 
import { ButtonGroup, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  colorWhite : {
    color : "#FFFFFF",
  },
  buttonYellow : {
    backgroundColor : "#FDE500",
  },
  buttonGreen : {
    backgroundColor : "#00ff00",
  },
  containerBox : {
    height: "100vh",
    width: "20vh",
    display: "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems:"center",
    objectFit: "contain",
    backgroundSize: "cover",
  },
  img1 :{
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "-1",
  }
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <>
    <Grid container xs={12} className={classes.containerBox}>
      <Grid className={classes.img1}>
      <img 
      src={img1} 
      alt='bg_image'/>
      </Grid>
      <Typography 
      variant="h4"
       className={classes.colorWhite} 
       align='center'>
         Learning experience will never be the same
      <Typography 
      varaitn="h1" 
      align='center'>
        Learning will be more interesting with motivation and monitoring
        </Typography>
        </Typography>
      <div className='hero-btns'>
        <ButtonGroup>
          <Button
          variant="contained" 
          className={classes.buttonGreen}
          >
            Suscribe Now
          </Button>
          <Button
          variant="contained" 
          className={classes.buttonYellow}
          >
            14 Days Free Trial
          </Button>
        </ButtonGroup>
      </div>
    </Grid>
    </>
  );
}

export default HeroSection;