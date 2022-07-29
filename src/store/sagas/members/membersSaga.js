import {call, takeEvery, put, all} from 'redux-saga/effects'
import * as constants from "../../constants";
import * as api from "../../../services/services";
import * as actionTypes from '../../actions/actionType';

export function* apiCallGetMembers(){
    return yield call(api.getContacts);
}

function* executeGetMembers() {

    // put results in state
    try {

        const membersResult = yield call(apiCallGetMembers);
        yield put({type: actionTypes.MEMBERS_ACTIONS_TYPES.ADD_MEMBERS_TO_STATE, payload: membersResult});
    } catch (e) {

        console.log("error " + e)
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
