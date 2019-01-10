

import { call, put } from "redux-saga/effects";
import APILayer from "../apis/index";



export function* layerFetchList(action) {
    const response = yield call(APILayer.getAll);
    const payload = response ? response.data : {}
    yield put({ type: 'LAYER_FETCH', payload });
}


export function* layerEdit(action) {
    yield call(APILayer.edit, action.layer);
    yield put({type: 'LAYER_SAVE', layer: action.layer});
    action.callbackSuccess();
}