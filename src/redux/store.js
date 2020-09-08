import { createStore,  compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';


import { sagaWatcher } from './sagas';
import UserReducer from './Users/UserReducer';

const saga = createSagaMiddleware();

export const store = createStore(
 UserReducer,
  compose(
    applyMiddleware(saga),
  )
);

saga.run(sagaWatcher);