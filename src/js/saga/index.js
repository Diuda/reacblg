import { takeLatest } from "redux-saga/effects";
import { fork, call } from "redux-saga/effects";
import { layerFetchList, layerAdd } from "./layer";


export function *sagas() {

      //  yield fork(takeLatest,"LAYER_ADD_SUCCESS", layerAdd)
      yield takeLatest("LAYER_ADD_SUCCESS", layerAdd)
    
}