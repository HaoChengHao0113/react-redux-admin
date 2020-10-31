import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'

function *add(){
    const state = yield select();
    state.value += state.num;
    console.log('this is saga add', state)
    yield put({ type: 'add_success', value: state.value})
}

function *minus(){
    const state = yield select();
    state.value -= state.num;
    console.log('this is saga minus', state)
    yield put({ type: 'minus_success', value: state.value})
}

function *sagas(){
    yield takeLatest('add', add);
    yield takeLatest('minus', minus);
}
export default sagas