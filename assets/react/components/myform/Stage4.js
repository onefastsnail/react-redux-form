import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Stage3 = props => {
    const { handleSubmit, previousPage } = props;
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">

            <h3>A Summary to send to an API upon submission</h3>

            <div><pre>{JSON.stringify(props.summary, null, 2)}</pre></div>

            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                    <button type="button" className="btn btn-default" onClick={previousPage}>Previous</button>
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </div>

        </form>
    );
};

Stage3 = reduxForm({
    form: 'myform', // share name for the form across routes
    destroyOnUnmount: false, // preserve form data
})(Stage3);

export default Stage3;
