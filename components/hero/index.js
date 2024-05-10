"use client";
// Styled
import styled from "styled-components";

// Utils
import { colors } from "../../utils/variables";
import Image from "next/image";

// Components
import Container from "../container";

// Background Image
import Background from "../../assets/images/background-img.jpg";
import breakpoints from "../../utils/breakpoints";

const StyledHero = styled.section`
  background-color: ${colors.grey__200};
  position: relative;
  z-index: 999;
  display: flex;

  p {
    color: ${colors.grey__100};
  }

  button {
    padding: 16px;
    background-color: transparent;
    border: 1px solid ${colors.grey__100};
    margin-right: 15px;
    color: ${colors.grey__100};
  }

  .imagen-container {
    position: relative;
    z-index: -1;

    .img {
      position: absolute;
      bottom: -300px;
      right: 0;
      width: 400px;
      height: auto;

      ${breakpoints.medium`
        top: -180px;
        width: 600px;
        bottom: 0;
      `}
    }
  }

  .project-button {
    background-color: ${colors.blue__50};
    color: white;
    border: 1px solid ${colors.blue__50};
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div className="row">
          <div className="col-12 col-md-5">
            <h1 className="mb-4 heading--m">
              We build beautiful and reliable web solutions
            </h1>
            <p className="mb-4">
              We strongly believe that communications, trust and transparency
              are the essential elements of successful business relationship.
              Ready for the journey?
            </p>
            <button className="button button-primary">Learn more</button>
            <button className="button button-secondary">Our projects</button>
          </div>
        </div>
      </Container>
      <div className="imagen-container">
        <Image
          src={Background}
          width={600}
          height={750}
          alt=""
          className="img"
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
