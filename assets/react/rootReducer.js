import { combineReducers } from 'redux';
import { reducer as somethingReducer } from './ducks/myform';
import { reducer as formReducer } from 'redux-form';

// this helps split our reducing functions into separate entities, each managing independent a specific branch of the state.
// use a nice name as we use this reference in our mapStateToProps calls
const rootReducer = combineReducers({
    something: somethingReducer,
    form: formReducer
});

export default rootReducer;
