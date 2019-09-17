import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      // <Container>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
