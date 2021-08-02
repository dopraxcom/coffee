import React from 'react';
import {useSelector , useDispatch } from 'react-redux'
import {
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link, Redirect, useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme: Theme) => createStyles({
    root : {
        height: 'auto',
        fontFamily: 'vazir',
        "& .MuiInputLabel-formControl": {
            fontFamily: 'vazir',
            right: '0 !important',
            left: 'auto'
        },
        "& .MuiSelect-icon": {
            left: '0 !important'
        },
        "& .MuiListItem-root": {
            justifyContent : "flex-end"
        }
    },
    bigForm: {
        width: '100%',
        height: 'auto'
    }, 
}))

function Store(){
    const history = useHistory();
    const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
        return (
           history.push(`/store/${event.target.value as string}`)
        )
    }

    const classes = useStyle();
    return(
        <div className={classes.root}>
        <FormControl className={classes.bigForm}>
            <InputLabel>انتخاب کتگوری محصول</InputLabel>
            <Select onChange={handleChange} >
                <MenuItem value={'porudct'}>Product</MenuItem>
            </Select>
        </FormControl>
        </div>
    );
};

export default Store;