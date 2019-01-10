import { combine, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { i18nReducer } from "react-redux-i18n";


import product from './product';
import layer from './layer';


export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    product,
    layer
})