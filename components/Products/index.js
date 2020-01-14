import React from 'react';

const Products = ({ products}) => products.map(product => <div>{product.name}</div>)

export default Products;
