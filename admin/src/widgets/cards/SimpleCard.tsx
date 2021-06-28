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
    },
    primary: {
        backgroundColor: '#a6d4fa',
    },
    icon: {
        position: 'absolute',
        marginInline: '10px',
        color: '#a6d4fa',
    }
}); 
function SimpleCard (props: any) {
    const classes = useStyles();

    return(
        <Card >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom >
                {props.title} <ScoreIcon className={classes.icon} /> 
                </Typography>
                <Typography color="primary">
                    {props.Qty} عدد
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SimpleCard;