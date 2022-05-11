import createSagaMiddleware, {runSaga} from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import logger from 'redux-logger';

import contactReducer from './reducers/contact/contactReducer';
import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({


    reducer: {
        contact: contactReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(logger),
})



