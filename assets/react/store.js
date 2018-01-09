import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(initalState) {

    // create an store (object) that holds the complete state of our app
    return createStore(
        rootReducer,
        initalState,
        applyMiddleware(thunk, logger)
    );
}
