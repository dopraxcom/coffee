import React from 'react';

import {
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
    LinearProgress,
    Button,
} from '@material-ui/core';

import ScoreIcon from '@material-ui/icons/Score';
import { FullscreenExitTwoTone } from '@material-ui/icons';


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
        color: '#0000009c',
    },
    qty: {
        textAlign: 'left',
        direction: 'rtl',
        fontFamily: 'Vazir',
        color: '#242423',
        fontSize:'13px',
    },
    btn: {
        display: 'flex',
        marginBottom: '-30px',
        padding: '12px',
        fontFamily: 'vazir',
        fontSize: '12px',
    }
}); 
function SimpleCard (props: any) {
    const classes = useStyles();
    if(props.total){
        return(
            <Card id={props.color} >
                <CardContent className={classes.primary}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom >
                    {props.title} <ScoreIcon className={classes.icon} /> 
                    </Typography>
                    <Typography color="primary" className={classes.qty}>
                        {props.Qty} عدد
                    </Typography>
                    <Typography color="primary" className={classes.qty}>
                        {props.total} تومان
                    </Typography>
                    <LinearProgress variant="buffer" value={props.Qty} valueBuffer={props.total} />
                    <Button className={classes.btn}>ادامه</Button>
                </CardContent>
            </Card>
        );
    } else {
        return(
            <Card id={props.color} >
                <CardContent className={classes.primary}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom >
                    {props.title} <ScoreIcon className={classes.icon} /> 
                    </Typography>
                    <Typography color="primary" className={classes.qty}>
                        {props.Qty} عدد
                    </Typography>
                    <Typography color="primary" className={classes.qty}>
                        {props.totalQty} عدد
                    </Typography>
                    <LinearProgress variant="buffer" value={props.Qty} valueBuffer={props.totalQty} />
                    <Button className={classes.btn}>ادامه</Button>
                </CardContent>
            </Card>
        );
    }
    

};

export default SimpleCard;