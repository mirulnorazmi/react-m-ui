import React from 'react'
import CardItem from './CardItem';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bgWhite : {
    padding: "4rem",
    backgroundColor: "#ffffff",
    width : "100%",
    alignContent: "center",
  },
}));

function Content() {
    const classes = useStyles();
    return (
        <div className={classes.bgWhite}>
            <Typography variant="h6" align="center">Subscribe any package to start learning with HomeTutor</Typography>
            <br/>
            <Grid container spacing="2">
                <Grid item xs={12} sm={3}>
                    <CardItem/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardItem/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardItem/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardItem/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Content
