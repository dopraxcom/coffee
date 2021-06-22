import React from 'react';

import {
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';


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
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SimpleCard;