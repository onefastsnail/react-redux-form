import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';

let Stage1 = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">

            <Field
                name="firstName"
                type="text"
                component={renderField}
                label="First Name"
            />
            <Field
                name="lastName"
                type="text"
                component={renderField}
                label="Last Name"
            />

            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-default">Next</button>
                </div>
            </div>

        </form>
    );
};

// this function takes configuration object and returns a new function; use it to wrap your form component and bind user interaction to dispatch of Redux actions
Stage1 = reduxForm({
    form: 'myform', // share name for the form across routes
    destroyOnUnmount: false, // preserve form data
    forceUnregisterOnUnmount: true, // unregister fields on unmount
    validate
})(Stage1);

export default Stage1;
