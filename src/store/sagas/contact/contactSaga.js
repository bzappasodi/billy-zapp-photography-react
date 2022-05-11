import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects'
import * as constants from "../../constants";

function* executeSubmitContactForm({name, email, message}) {

   yield console.log("chrissy " + name, email, message)
    // try {
    //     const user = yield call(Api.fetchUser, action.payload.userId);
    //     yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    // } catch (e) {
    //     yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
}

export function performSubmitContactForm(formValues) {
   return{
       type: constants.types.SUBMIT_CONTACT_FORM,
       name: formValues.name,
       email: formValues.email,
       message: formValues.message,
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

function* watchSubmitContactForm() {
    yield takeEvery(constants.types.SUBMIT_CONTACT_FORM, executeSubmitContactForm);
}

export default function* sagas(){
    return yield all(
        [watchSubmitContactForm()]
    )
}