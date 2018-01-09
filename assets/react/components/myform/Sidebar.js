import React from 'react';

let Sidebar = props => {
    const { data } = props;
    return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
};

export default Sidebar;
