import React from "react";

import Head from "next/head";

import styled from "styled-components";

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: #000; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: normal;
  font-family: sans-serif;
  font-size: 59px;
  color: rgb(255, 255, 255);
  line-height: 105%;
  white-space: pre-line;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Banner>
      <Title>NextJs Offline / Pwa</Title>
    </Banner>
  </div>
);

export default Home;
