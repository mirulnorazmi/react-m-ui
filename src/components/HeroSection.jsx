import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import './HeroSection.css';
import img1 from '../images/img-1.jpeg';
import Typography from '@material-ui/core/Typography'; 
import { ButtonGroup } from '@material-ui/core';
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
  }
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <div className='hero-container'>
      <img src={img1} alt='bg_image' className="img1"/>
      <Typography variant="h4" className={classes.colorWhite} align='center'>Learning experience will never be the same
      <Typography varaitn="h1" align='center'>Learning will be more interesting with motivation and monitoring</Typography></Typography>
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
    </div>
  );
}

export default HeroSection;