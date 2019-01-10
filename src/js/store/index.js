import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from "../reducers/index";

import createSagaMiddleware from "redux-saga";

import { sagas } from "../saga/index";


const sagaMiddleware= createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(reducers,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools));

sagaMiddleware.run(sagas);


export default store;