import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './table-with-users/reducer';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducer,
  middlewares,
);

sagaMiddleware.run(rootSaga);

export default store;
