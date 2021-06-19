import { call, put, takeLatest } from 'redux-saga/effects';
import * as testApi from '../api/testApi';
import * as TestActionConstants from '../constants/test';

export function* getTestObjectSaga() {
    try {
        debugger;
        const testObject = yield call(testApi.getTestObjets);
        yield put({ type: TestActionConstants.TEST_GET_SUCCESS, testObject });
    } catch (error) {
        yield put({ type: TestActionConstants.TEST_GET_ERROR, error });
    }
}

export function* testSaga() {
    yield takeLatest(TestActionConstants.TEST_GET_REQUEST, getTestObjectSaga);
}