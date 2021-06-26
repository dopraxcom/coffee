import React from 'react';

import {
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
    Box,
} from '@material-ui/core';

import ScoreIcon from '@material-ui/icons/Score';


const useStyles = makeStyles({
    title: {
        fontSize: 14,
        fontFamily: 'Vazir',
    }
}); 
function SimpleCard (props: any) {
    const classes = useStyles();

    return(
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom >
                <ScoreIcon /> {props.title}
                </Typography>
                <Typography color="primary">
                    {props.Qty} عدد
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SimpleCard;