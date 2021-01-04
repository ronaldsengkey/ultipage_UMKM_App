// components/Layout.js
import Head from "next/head";

import {NavbarSearch,SearchResultHeader }from "./Header";
import NavBar from "./NavBar";


import navButtons from "../config/buttons";

const Layout = props => {
  const appTitle = `UMKM`;

  return (
    <div className="LayoutSearch">
      <Head>
      <title>UMKM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NavbarSearch appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;


export const SearchResultLayout = props => {

  return (
    <div className="Layout">
      <Head>
      <title>UMKM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <SearchResultHeader title={props.title} />
      <div className="Content">{props.children}</div>
    </div>
  );
};