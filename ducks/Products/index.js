import apiService from '../../services/products';

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
    console.log('SE LLAMO A LA ACCION GETPRODUCTS')
    dispatch({ type: types.PRODUCTS_GET_REQUEST});
    try {
      const products = await apiService.getProducts();

      dispatch({ type: types.PRODUCTS_GET_SUCCESS, payload: products});
      return products;
    } catch(err) {
      dispatch({ type: types.PRODUCTS_GET_FAILURE })
      return err
    }
  },
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
