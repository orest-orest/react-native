import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore(initialState) {


    const store = createStore(rootReducer, initialState, applyMiddleware(thunk), composeWithDevTools());

    return store
}
