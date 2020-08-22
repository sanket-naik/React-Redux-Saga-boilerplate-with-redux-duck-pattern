import { put, takeLatest, call } from 'redux-saga/effects';
import {types as actionTypes} from '../ducks/fetchData'
import {axiosCall} from '../../utils/axiosCall';
import {Static_DATA_Failed} from '../../utils/Constants';
import { apiURL } from '../../utils/apis';

//GET EMP
function* fetchData(action) {
    try{
        const response = yield call (axiosCall, "get", apiURL.FETCH_DAT_LIST);
        if(response.status===200){
         yield put({ type: actionTypes.FETCH_DATA_SUCCESS, data:response.data});
        }
        else{
            yield put({ type: actionTypes.FETCH_DATA_FAIL, data:response.data});
        }
    }catch(e){
         if(!!e.response && !!e.response.data)
        {
          yield put({ type: actionTypes.FETCH_DATA_FAIL, data:e.response.data});
        }
        else {
          yield put({ type: actionTypes.FETCH_DATA_FAIL, data:Static_DATA_Failed});
        }
    }

}
export function* dataWatcher() {
     yield takeLatest(actionTypes.FETCH_DATA, fetchData)
}
