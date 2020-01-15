import React from 'react';

const Products = ({ products, getProducts}) => (
<>
{products.map(product => <div key={product._id}>{product.name}</div>)}
<button onClick={getProducts}>Cargar products</button>
</>)

export default Products;
