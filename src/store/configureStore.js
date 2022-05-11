import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';

import contactReducer from './reducers/contact/contactReducer';
import {configureStore} from '@reduxjs/toolkit'
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        contact: contactReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(logger),
})

