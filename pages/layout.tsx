import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>IFFI | Website</title>
        <meta name="description" content="IFFI is a ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader />
      <Header />
      <main>{children}</main>
    </>
  );
}
