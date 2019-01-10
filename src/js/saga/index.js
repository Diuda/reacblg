import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { layerFetchList, layerAdd } from "./layer";


export function* sagas() {
    yield [
        fork(takeLatest,"LAYER_ADD", layerAdd)
    ]
}