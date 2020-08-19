import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../config/ReactotronConfig';

import books from './books/reducer';
import authorization from './authorization/reducer';

const reducers = combineReducers({
  books,
  authorization
});

const enhancers = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronMiddleware = Reactotron.createEnhancer();
  enhancers.push(reactotronMiddleware);
}

const store = createStore(reducers, compose(...enhancers));

export default store;
