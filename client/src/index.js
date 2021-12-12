import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'materialize-css/dist/css/materialize.min.css'
import {
    Provider
}   from 'react-redux'
import { 
    createStore,
    applyMiddleware
} from 'redux'
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// Render the custom component and along with it 
// providing the second argument which is contianer
// for all the app components
ReactDOM.render(
    // Provider Tag allows every component of the app to access the store
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);