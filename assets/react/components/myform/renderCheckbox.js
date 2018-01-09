import React from 'react';

const renderCheckbox = ({ input, label, type, meta }) => {
    return (
        <label>
            {input.value} <input type={type} {...input} />
            {meta.touched && meta.error &&
                <span className="error">{meta.error}</span>}
        </label>
    );
};

export default renderCheckbox;
