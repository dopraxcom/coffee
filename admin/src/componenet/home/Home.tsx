import React from 'react';

import SimpleCard from '../../widgets/cards/SimpleCard';

import { 
    Typography,
    Grid,
    Paper,
    makeStyles,
    createStyles,
    Theme,
 } from '@material-ui/core';


 const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '500px',
      backgroundColor: '#fff'
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
                <Grid item xs={12} lg={4} >
                    <Paper className={classes.paper}>
                        <SimpleCard
                            color="primary"
                            title="سفارشات جاری"
                            Qty = "12"
                            totalQty="233"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper className={classes.paper}>
                        <SimpleCard
                            color="danger"
                            title="میزان فروش امروز"
                            Qty = "22"
                            total="220000"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper className={classes.paper}>
                        <SimpleCard
                            color="warning"
                            title="میزان فروش هفته"
                            Qty = "122"
                            total="103000456"
                        />
                    </Paper>
                </Grid>
            </Grid> 
        </div>
    );
}

export default Home;