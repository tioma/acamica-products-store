import React from 'react';
import { connect } from 'react-redux';

import { actions as productsActions } from '../../ducks/Products';

import Products from '.';

const ProductsContainer = (props) => <Products products={props.products} getProducts={props.getProducts} />

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { getProducts: productsActions.getProducts })(ProductsContainer);
