import {call, takeEvery, all} from 'redux-saga/effects'
import * as constants from "../../constants";
import * as api from "../../../services/services";

function* executeGetMembers() {

    // put results in state
    try {
        yield call(api.getContacts);
        // yield put({type: "GET_MEMBERS", user: user});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function performGetMembers() {
    return {
        type: constants.types.GET_MEMBERS,
    }
}

function* watchGetMembers() {
    yield takeEvery(constants.types.GET_MEMBERS, executeGetMembers);
}

export default function* sagas() {
    return yield all(
        [watchGetMembers()]
    )
}
