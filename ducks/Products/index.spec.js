import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ApiService from '../../services/products';

import {
  defaultState, types, actions, reducer,
} from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Products', () => {
  describe('actions', () => {
    describe('.getProducts', () => {
      it('should dispatch fetching and success types on success response', () => {
        const mockSuccessResponse = { data: [{ id: 'test id' }] };
        const getDataMock = jest.spyOn(ApiService, 'getProducts').mockImplementation(() => Promise.resolve(mockSuccessResponse));

        const expectedActions = [
          { type: types.PRODUCTS_GET_REQUEST },
          { type: types.PRODUCTS_GET_SUCCESS, payload: mockSuccessResponse },
        ];

        const store = mockStore({
          products: defaultState,
        });

        return store.dispatch(actions.getProducts())
          .then(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
            expect(getDataMock).toBeCalled();
            getDataMock.mockClear();
          });
      });

      it('should return fetching and failure types on failure response', () => {
        const getDataMock = jest.spyOn(ApiService, 'getProducts').mockImplementation(() => Promise.reject());

        const expectedActions = [
          { type: types.PRODUCTS_GET_REQUEST },
          { type: types.PRODUCTS_GET_FAILURE },
        ];

        const store = mockStore({
          products: defaultState,
        });

        return store.dispatch(actions.getProducts())
          .catch(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
            expect(getDataMock).toBeCalled();
            getDataMock.mockClear();
          });
      });
    });
  });

  describe('reducer', () => {
    it(':: PRODUCTS/GET_REQUEST', () => {
      const action = { type: types.PRODUCTS_GET_REQUEST };
      expect(reducer(undefined, action)).toMatchObject({
        ...defaultState,
        fetching: true,
      });
    });

    it(':: PRODUCTS/GET_SUCCESS', () => {
      const action = { type: types.PRODUCTS_GET_SUCCESS, payload: [{ id: 'test-product'}] };
      expect(reducer(undefined, action)).toMatchObject({
        ...defaultState,
        fetching: false,
        products: action.payload,
      })
    })

    it(':: PRODUCTS/GET_FAILURE', () => {
      const action = { type: types.PRODUCTS_GET_FAILURE };
      expect(reducer(undefined, action)).toMatchObject({
        ...defaultState,
        fetching: false,
      })
    })
  });
});
