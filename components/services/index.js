"use client";

// Styled
import styled from "styled-components";

// Color
import { colors } from "../../utils/variables";

// Components
import Container from "../container";

// Icons
import Paper from "../../assets/icons/paper";
import Computer from "../../assets/icons/computer";
import UX from "../../assets/icons/ux-ui";
import breakpoints from "../../utils/breakpoints";

const StyledServices = styled.section`
  background-color: ${colors.grey__200};
  text-align: center;
  color: white;
  margin: 0px auto -75px auto;

  ${breakpoints.medium`
    margin-bottom: -220px;
  `}

  ${Container} {
    position: relative;
    z-index: 999;
  }

  svg {
    width: 50px;
    height: 50px;
    background-color: ${colors.blue__50};
    border-radius: 50%;
    padding: 12px;
    margin-bottom: 20px;

    * {
      fill: white;
      stroke: white;
    }
  }

  .title {
    font-size: 28px;
    font-weight: 700;
  }

  .service-card {
    padding: 25px 40px;
    background-color: white;
    color: grey;
    width: 360px;
    position: relative;
    z-index: 999;
    margin-bottom: 16px;

    .service {
      color: ${colors.grey__200};
    }
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <Container data-aos="fade-in">
        <h3 className="title mb-4">Our Services</h3>
        <p className="paragraph">
          We feel very strong about our skills when it comes to planning,
          <br className="d-none d-md-block" />
          designing and coding applications. Here is what we love to do!
        </p>
        <div className="row justify-content-center justify-content-md-between gap-1 mt-5">
          <div className="service-card" data-aos="fade-down">
            <Paper />
            <p className="mb-4 service">Business & Product Concept</p>
            <p className="paragraph-small mb-4">
              Analyse Business and product concepts at Start-up Workshop or
              Ongoing Projects Audits and prepare a viable and sensible product
              roadmap for achieving a perfect market fir.
            </p>
            <button className="button button-primary">Learn more</button>
          </div>
          <div className="service-card" data-aos="fade-down">
            <Computer />
            <p className="mb-4 service">Web & Mobile Development</p>
            <p className="paragraph-small mb-4">
              Plan, develop and test high-quality web-applications using
              AngularJS, NodeJS, Javascript, Typescript, HTML5 and SASS/CSS3
              frameworks and native mobile languages.
            </p>
            <button className="button button-primary">Learn more</button>
          </div>
          <div className="service-card" data-aos="fade-down">
            <UX />
            <p className="mb-4 service">UX & UI Design</p>
            <p className="paragraph-small mb-4">
              Sketch information architecture and simple mock-ups, convert them
              into clickeable prototypes and finish with usable interface
              designs to deliver a good and reliable user experience.
            </p>
            <button className="button button-primary">Learn more</button>
          </div>
        </div>
      </Container>
    </StyledServices>
  );
};

export default Services;
