import {all } from 'redux-saga/effects';

import contactSaga from './contact/contactSaga';

export default function* rootSaga(){
    yield all([contactSaga()])
}