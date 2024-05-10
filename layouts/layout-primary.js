import React from "react";

// Components
// import Menu from "../components/menu";
import GlobalStyles from "../assets/styles/globalStyles";
import Footer from "../components/footer";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {/* <Menu /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
