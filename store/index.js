import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import defaultInitialState from './initialState';

export function initializeStore(initialState = defaultInitialState) {
  return createStore(
    reducers,
    initialState,
    compose(applyMiddleware(thunk))
  )
}
