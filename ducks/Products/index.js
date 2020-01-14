import productsService from '../../services/products';

const defaultState = {
  products: [],
  fetching: false,
};

const types = {
  PRODUCTS_GET_REQUEST: 'PRODUCTS/GET_REQUEST',
  PRODUCTS_GET_SUCCESS: 'PRODUCTS/GET_SUCCESS',
  PRODUCTS_GET_FAILURE: 'PRODUCTS/GET_FAILURE',
}

const actions = {
  getProducts: () => async (dispatch) => {
    dispatch({ type: types.PRODUCTS_GET_REQUEST});
    const products = await productsService.getProducts();

    dispatch({ type: types.PRODUCTS_GET_SUCCESS, payload: products});
    return products;
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.PRODUCTS_GET_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case types.PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.payload,
      }
    case types.PRODUCTS_GET_FAILURE:
      return {
        ...state,
        fetching: false,
      }
    default:
      return {...state}
  }
}

export { defaultState, types, actions, reducer };
