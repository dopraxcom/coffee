import React from 'react';

import SimpleCard from '../../widgets/cards/SimpleCard';

import { 
    Typography,
    Grid,
    Paper,
    makeStyles,
    createStyles,
    Theme,
    createMuiTheme,
 } from '@material-ui/core';


 const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '500px',
      backgroundColor: '#f5f5f5'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      boxShadow: 'none',
    },
    backgroundPrimary: {
    },

  }),
);

function Home() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={2} justify="center"> 
                <Grid item xs={4} >
                    <Paper className={classes.paper}>
                        <SimpleCard
                            title="سفارشات جاری"
                            Qty = "12"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <SimpleCard
                            title="میزان فروش امروز"
                            Qty = "22"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
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