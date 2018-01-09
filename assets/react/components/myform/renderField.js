import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div className="form-group">
        <label className="col-sm-3 control-label">
            {label}
        </label>
        <div className="col-sm-9">
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched &&
                error &&
                <span>
                    {error}
                </span>}
        </div>
    </div>;

export default renderField;
