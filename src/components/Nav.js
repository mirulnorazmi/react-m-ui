import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/logo_hometutor.png';
import './Nav.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img2 :{
      width : "120px",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root} margin="0px 0px 20px 0px;">
      <AppBar position="fixed" color="#fff">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <img className={classes.img2} src={logo} alt="logo" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}