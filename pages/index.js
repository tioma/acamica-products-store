import React from "react";
import Head from "next/head";

import { actions as productActions } from '../ducks/Products';

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
  // We do this to fill store state with products data
  const products = await reduxStore.dispatch(productActions.getProducts());
  console.log(products);
  return {};
};

export default Home;
