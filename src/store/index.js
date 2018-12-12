import { createStore,applyMiddleware } from 'redux';
//redux-thunk中间件对store.dispatch封装，使之可以接受函数
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
//mount it on the store
const store =createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(TodoSagas);

export default store;
 
