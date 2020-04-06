import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";

import Helmet from "react-helmet";

export default ({ mycontent }) => (


  <React.Fragment>

    <Helmet>
      <meta charset="utf-8" />
      <title>ESA-Tool</title>
      <meta
      name="ESA-Tool"
      content="Web site created using create-react-app"
    />
    <link rel="icon" href="%PUBLIC_URL%/img/logo/favicon.ico" />
    <noscript>You need to enable JavaScript to run this app.</noscript>
    </Helmet>

    <Header />
   <Content />

    <footer>{`${new Date().getFullYear()} No Rights Whatsoever Reserved`}</footer>
  </React.Fragment>
);
