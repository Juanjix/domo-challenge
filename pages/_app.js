import React from "react";

// Layout
import PrimaryLayout from "../layouts/layout-primary";
import GlobalStyles from "../assets/styles/globalStyles";

// Styles
import "../assets/styles/reset.css";
import "../assets/styles/main.scss";

const MyApp = ({ Component }) => (
  <PrimaryLayout>
    <GlobalStyles />
    <Component />
  </PrimaryLayout>
);

export default MyApp;
