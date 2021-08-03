import React from 'react'
import { useParams } from 'react-router-dom'
import { createStyles , makeStyles } from '@material-ui/core/styles'
import form from '../../state/reducers';
import {Field, reduxForm } from 'redux-form';

const useStyle = makeStyles(()=> 
    createStyles({
        root: {
            direction: 'rtl'
        }
    })
)

const AddProducts = () => {

    const classes = useStyle();
    type catName = {
        catname : string;
    }


console.log(useParams())
    const {catname} = useParams<catName>();
    return (
        <div className={classes.root}>اضافه کردن محصول در دسته بندی: {catname} </div>
    )
}

export default reduxForm({})(AddProducts);