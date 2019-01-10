

import { call, put } from "redux-saga/effects";
import APILayer from "../apis/index";



export function* layerFetchList(action) {
    const response = yield call(APILayer.getAll);
    const payload = response ? response.data : {}
    yield put({ type: 'LAYER_FETCH', payload });
}


export function* layerAdd(action) {
    
    yield call(APILayer.add, action.payload);
    yield put({type: 'LAYER_ADD', layer: action.payload});
    action.callbackSuccess();
}