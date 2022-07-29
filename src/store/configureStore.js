import createSagaMiddleware from 'redux-saga';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import contactReducer from './reducers/contact/contactReducer';
import membersReducer from './reducers/members/membersReducer';
import rootSaga from './sagas/rootSaga';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    contactReducer,
    membersReducer
})


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,

    middleware: [sagaMiddleware, logger]
})

sagaMiddleware.run(rootSaga);


