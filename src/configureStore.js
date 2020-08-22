import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/ducks';
import rootSaga from './redux/sagas';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

//WHITELISTED MODULES
import {whitelisted} from './redux/ducks/index'

 //REDUX PERSIST
 const persistConfig = {
  key: 'root',
  storage,
  whitelist: [...whitelisted]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

//CREATING SAGA
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(
  applyMiddleware(sagaMiddleware),
  )
);


sagaMiddleware.run(rootSaga);

//CREATING SAGA ENDS HERE


export const persistor = persistStore(store)