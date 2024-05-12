import React, { useEffect } from "react";

// Components
import GlobalStyles from "../assets/styles/globalStyles";
import Footer from "../components/footer";
// import Menu from "../components/menu";

// Libraries
import AOS from "aos";
import "aos/dist/aos.css";

const PrimaryLayout = ({ children }) => {
  // Initializes `AOS` plugin
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

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
