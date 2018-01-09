import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import MyForm from './containers/MyForm';

// create an instance of our store
const store = configureStore();

/*
    lets render our react component to the dom
    provider (from react redux) attaches our app to our store, for top level components
    provider attaches our redux store to react components within
*/
render(
    <Provider store={store}><MyForm /></Provider>,
    document.getElementById('reacting-form')
);
