import React from "react";
import App from "next/app";
import "@/css/tailwind.css";
import "@/css/styles.css";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
            key="google-font-open-sans"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
