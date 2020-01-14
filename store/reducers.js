import { combineReducers } from 'redux';

import { reducer as productsReducer } from '../ducks/Products';

const reducers = { products: productsReducer };

export default combineReducers(reducers);
