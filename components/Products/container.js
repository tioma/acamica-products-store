import React from 'react';
import { connect } from 'react-redux';

import Products from '.';

const ProductsContainer = (props) => <Products products={props.products} />

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, null)(ProductsContainer);
