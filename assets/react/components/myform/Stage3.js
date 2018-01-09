import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderCheckbox from './renderCheckbox';

let Stage3 = props => {

    const { handleSubmit, previousPage, actions, error, touched } = props;
    const { pens } = props.data;

    const handleChange = function (e) {
        if (pens.length == 0) actions.fetchPens();
    };

    return (
        <form onSubmit={handleSubmit} className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-3 control-label">
                    Do you like bikes?
                </label>
                <div className="col-sm-9">
                    <div className="checkbox">
                        <Field name="likes_bikes" type="radio" value="kylla" component={renderCheckbox} onChange={handleChange} />
                        <Field name="likes_bikes" type="radio" value="ei" component={renderCheckbox} onChange={handleChange} />
                    </div>
                </div>
            </div>

            {pens.length > 0 && <div className="form-group">
                <label className="col-sm-3 control-label">Pens</label>
                <div className="col-sm-9">
                    <Field name="pen" component="select" className="form-control">
                        <option>Please select</option>
                        {pens.map(({ title, slug }) => <option key={slug} value={title}>{title}</option>)}
                    </Field>
                </div>
            </div>}

            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                    <button type="button" className="btn btn-default" onClick={previousPage}>Previous</button>
                    <button type="submit" className="btn btn-default">Next</button>
                </div>
            </div>

        </form>
    );
};

Stage3 = reduxForm({
    form: 'myform', // share name for the form across routes
    destroyOnUnmount: false, // preserve form data
    forceUnregisterOnUnmount: true, // unregister fields on unmount
    validate
})(Stage3);

export default Stage3;
