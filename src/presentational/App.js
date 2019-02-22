import React from 'react';
import './App.scss';
import Header from './Header';
import Router from '../router'
import { Provider } from 'react-redux';
import reducer from '../reducers';
import rootSaga from '../sagas';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  return(
      <div className="App">
        <Header />
        <Provider store={store}>
            <Router />
        </Provider>
      </div>
    );
};

export default App;