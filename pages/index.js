import React from 'react';
import Head from 'next/head';

import { actions as productActions } from '../ducks/Products';
import { actions as userActions } from '../ducks/User';

import ProductsContainer from '../components/Products/container';

const Home = () => (
  <>
<Head>
  <title>Home</title>
  <link rel="icon" href="/favicon.ico" />
  <div>Listado de productos</div>
</Head>
<ProductsContainer />
</>
);

Home.getInitialProps = async ({ reduxStore }) => {
  // We do this to fill store state with initial data
  await reduxStore.dispatch(productActions.getProducts());
  await reduxStore.dispatch(userActions.getUser());
  return { algo: 'hola'};
}

export default Home;
