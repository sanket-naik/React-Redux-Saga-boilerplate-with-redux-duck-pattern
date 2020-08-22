
import { all } from 'redux-saga/effects';
import { dataWatcher } from './fetchData';

export default function* rootSaga() {
    yield all([
        dataWatcher()
    ]);
 }
