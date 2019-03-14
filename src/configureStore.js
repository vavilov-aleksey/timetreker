import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;

    // local
    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
    );

    // prod
    // const enhancer = applyMiddleware(thunk);

    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}