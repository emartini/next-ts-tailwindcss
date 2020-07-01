import * as React from "react";
import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title></title>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
        key="google-font-open-sans"
      />
    </Helmet>
    {children}
  </React.Fragment>
);
export default Wrapper;
