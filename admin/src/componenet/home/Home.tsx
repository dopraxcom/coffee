import React from 'react';

import SimpleCard from '../../widgets/cards/SimpleCard';

import { 
    Typography,
    Grid,
    Paper,
    makeStyles,
    createStyles,
    Theme
 } from '@material-ui/core';


 const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    backgroundPrimary: {
        backgroundColor:'#4895ef',
    },
  }),
);

function Home() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container > 
                <Grid item xs={6} >
                    <Paper className={classes.paper}>
                        <SimpleCard
                            title="سفارشات جاری"
                            Qty = "12"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <SimpleCard
                            title="میزان فروش امروز"
                            Qty = "22"
                        />
                    </Paper>
                </Grid>
            </Grid> 
        </div>
    );
}

export default Home;