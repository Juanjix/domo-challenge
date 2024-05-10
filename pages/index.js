import React from "react";

import styled from "styled-components";

// Layout
import LayoutPrimary from "../layouts/layout-primary";
import breakpoint from "../utils/breakpoints";

// Sections
import Hero from "../components/hero";
import Tecnologies from "../components/tecnologies";
import Services from "../components/services";
import Clients from "../components/clients";

const StyledHome = styled.main`
  section {
    padding: 96px 0 24px 0;

    ${breakpoint.medium`
      padding: 160px 0;
    `}
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Services />
      <Tecnologies />
      <Clients />
    </StyledHome>
  );
};

export default Home;

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>;
