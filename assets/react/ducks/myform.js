// idea of "ducks" from https://github.com/erikras/ducks-modular-redux

import axios from 'axios';

/*
    Initial state of our store
*/
const initialState = {
    pens: []
};

/*
    Our action types
*/
export const FETCH_PENS_REQUEST = 'FETCH_PENS_REQUEST';
export const FETCH_PENS_FAILURE = 'FETCH_PENS_FAILURE';
export const FETCH_PENS_SUCCESS = 'FETCH_PENS_SUCCESS';

/*
    Our action creators
*/
export const requestPens = () => ({
    type: FETCH_PENS_REQUEST
});

export const receivePens = (json) => ({
    type: FETCH_PENS_SUCCESS,
    pens: json,
});

export function fetchPens() {

    return function (dispatch) {

        // dispatch an action creator to say we have began to fetching something
        dispatch(requestPens());

        axios.get('https://gist.githubusercontent.com/onefastsnail/3b69a4844622879dcedd68858644db7b/raw/82a9e8b8ab10509dc60056b683068654e13045a9/pens.json', {
            params: {}
        })
            .then(function (response) {
                //once we have some data lets dispatch another redux event for our reducers to update state
                dispatch(receivePens(response.data));
            })
            .catch(function (error) {
                //console.log(error);
            });

    };
}

/*
    Our reducer
*/
export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_PENS_SUCCESS: {
            const y = Object.assign({}, state);
            y.pens = action.pens;

            return y;
        }

        default:
            return state;
    }
};

/*
    Our selectors
*/
export function getPens(state) {
    return state.pens;
}
