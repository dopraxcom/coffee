import React from 'react';
import { Field , reduxForm } from 'redux-form';
import {useSelector , useDispatch } from 'react-redux'

function Store(){

    function renderInput(params:any) {
        console.log(params);
        return(
            <input {...params.input}/>
        )
    }
    return(
        <form>
            <Field name="name" component={renderInput} />
        </form>
    );
};

export default reduxForm({
    form : "addProduct"
})(Store);