import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects'
import * as constants from "../../constants";

function* executeSubmitContactForm(action) {

   yield console.log("chrissy")
    // try {
    //     const user = yield call(Api.fetchUser, action.payload.userId);
    //     yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    // } catch (e) {
    //     yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function performSubmitContactForm(action) {
   return{
       type: constants.types.SUBMIT_CONTACT_FORM,
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

function* watchSubmitContactForm() {
    yield takeEvery("SUBMIT_CONTACT_FORM", executeSubmitContactForm);
}

export default function* sagas(){
    return yield all(
        [watchSubmitContactForm()]
    )
}