import {GET_IMAGES} from "../actions/action-types";


const initialState = {
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_IMAGES:
            // console.log(initialState)
            return {...state, imageList: action.payload};
        default:
            return state;
    }
}

export default rootReducer;