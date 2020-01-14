import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appStore from './reducers';
import defaultInitialState from './initialState';

export function initializeStore(initialState = defaultInitialState) {
  return createStore(
    appStore,
    initialState,
    compose(applyMiddleware(thunk))
  )
}
