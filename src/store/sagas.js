import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';

function* getInitList() {
 try {
    const res =yield axios
    .get(
      'https://easy-mock.com/mock/5bdd1c98217bf75be9bd98cd/manager/api/listTest'
    );
    const action = initListAction(res.data.result);
    yield put(action);
 }catch(e){
    console.log('请求失败');
 }

}
//generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
