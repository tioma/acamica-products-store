import App from 'next/app'
import React from 'react'
import withReduxStore from '../hoc/with-redux-store'
import { Provider } from 'react-redux'
class MyApp extends App {
  render() {
    console.log('********** ESTE ES EL RENDER DE APP *********');
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
export default withReduxStore(MyApp)
