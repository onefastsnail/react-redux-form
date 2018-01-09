import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';

let Stage2 = props => {
    const { handleSubmit, previousPage } = props;
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
            />
            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                    <button type="button" className="btn btn-default" onClick={previousPage}>Previous</button>
                    <button type="submit" className="btn btn-default">Next</button>
                </div>
            </div>
        </form>
    );
};

Stage2 = reduxForm({
    form: 'myform', // share name for the form across routes
    destroyOnUnmount: false, // preserve form data
    forceUnregisterOnUnmount: true, // unregister fields on unmount
    validate
})(Stage2);

export default Stage2;
