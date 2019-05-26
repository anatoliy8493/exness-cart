import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';
import App from './containers/App';
import rootReducer from './reducers';
import { reHydrateStore, localStorageMiddleware } from './middleware';

import 'normalize.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  reHydrateStore(),
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    localStorageMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('root'),
);
