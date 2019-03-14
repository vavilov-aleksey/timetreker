import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers'
import { BrowserRouter} from 'react-router-dom'
import Icon from './svgSprite/svgSprite'
import configureStore from './configureStore'
// import Beforeunload from 'react-beforeunload'

import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css'
import './Style/Settings.css';

const store = configureStore();

//Todo временное решение. Нужно сделать вызов функции без прямого вызова
window.addEventListener('load', () => {
    new Icon()
});
render(
    //<Beforeunload onBeforeunload={() => "You'll loose your data!"}>
        <Provider store={store}>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </Provider>
    //</Beforeunload>
    , document.getElementById('wrapper'));
registerServiceWorker();
