import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/jquery/dist/jquery.slim'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/popper.js/dist/popper'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {
    Provider
} from 'react-redux'
import employeeRuducer from './reducer/emp'
import userReducer from './reducer/user'

const mylog = store => next => action => {
    console.log("Log Action ,", action)
    next(action)
}
const store = createStore(combineReducers({
    emp : employeeRuducer ,
    user : userReducer
}), {}, applyMiddleware(mylog))
store.subscribe(() => console.log(store.getState()))


ReactDOM.render( 
    <Provider store={store}>
        < App /> 
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()