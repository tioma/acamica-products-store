import { combineReducers } from 'redux';

import { reducer as productsReducer } from '../ducks/Products';
import { reducer as userReducer } from '../ducks/User';

const reducers = { products: productsReducer, user: userReducer };

export default combineReducers(reducers);
