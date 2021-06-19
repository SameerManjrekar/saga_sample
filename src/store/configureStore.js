import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import createValidator from './createValidator';
import rootReducer from './../reducers';
import { applicationStateSchema } from '../state-schema';
import { initSagas } from '../sagas/initSagas';
import { initialState } from '../initialState';

// Create Middlewares
const sagaMiddleware = createSagaMiddleware();
const validatorMiddleware = createValidator({ schema: applicationStateSchema, state: ['sameer'] });
const devTools = require('../devTools/devTools').default;
const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});

// Compose Enhancers
const composables = compose(applyMiddleware(
    promiseMiddleware,
    sagaMiddleware,
    validatorMiddleware,
    loggerMiddleware),
   devTools.instrument()); 

   const configureStore = () => {
       const store = createStore(rootReducer, initialState, composables);
       initSagas(sagaMiddleware);
       return store;
   };

export default configureStore;