import {all} from 'redux-saga/effects';

import contactSaga from './contact/contactSaga';
import membersSaga from './members/membersSaga';

export default function* rootSaga(){
    yield all([contactSaga(), membersSaga()])
}
