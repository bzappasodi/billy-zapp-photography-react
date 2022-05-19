import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects'
import * as constants from "../../constants";
import * as setContactForm from "../../../services/services";

function* executeSubmitContactForm({id, name, email, message}) {

    try {
        yield call(setContactForm.setContactForm,{id, name, email, message});
        // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function performSubmitContactForm(formValues) {
    const id = Math.floor(Math.random() * 10);

    return{
       type: constants.types.SUBMIT_CONTACT_FORM,
       contactId: id,
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