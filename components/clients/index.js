"use client";

import styled from "styled-components";

// Utils
import { colors } from "../../utils/variables";

// Container
import Container from "../container";

import Image from "next/image";

// Logos
import Nike from "../../assets/icons/nike";
import Tnw from "../../assets/icons/tnw";
import Google from "../../assets/icons/google";
import ItNews from "../../assets/icons/it-news";
import Rbnb from "../../assets/icons/rbnb";

// Card Phone
import Phone from "../../assets/images/client-card/phone.png";
import breakpoints from "../../utils/breakpoints";

const StyledClient = styled.section`
  background-color: white;
  text-align: center;
  margin-bottom: -120px;

  ${breakpoints.medium`
    margin-bottom: -220px;
  `}

  .client-logo {
    margin: 50px 0 125px 0;

    ${breakpoints.medium`
      margin: 50px 0 125px 0;
    `}

    svg {
      width: 130px;

      * {
        fill: grey;
        stroke: grey;
      }

      &:hover {
        width: 145px;

        ${breakpoints.medium`
          width: 155px;
        `}
      }
    }
  }

  .client-card {
    background-color: ${colors.blue__50};
    width: 550px;
    height: auto;
    padding: 50px 16px;
    color: white;
    position: relative;
    z-index: 9999;
    overflow: hidden;

    ${breakpoints.medium`
      padding: 32px 32px;  

    `}

    .image-services {
      position: relative;
      z-index: -1;

      img {
        position: absolute;
        bottom: -160px;
        z-index: -1;
        right: -75px;

        ${breakpoints.medium`
          position: absolute;
          bottom: -90px;
          z-index: -1;
          right: -65px;
        `}
      }
    }

    .title {
      font-size: 25px;
    }

    p {
      color: white;
    }

    button {
      background-color: transparent;
      border: 1px solid white;
      color: white;
      padding: 10px 20px;
    }
  }
`;

const Clients = () => {
  return (
    <StyledClient>
      <Container>
        <p
          className="text--xs text-uppercase"
          data-aos="fade-in"
          data-aos-durations="1000">
          Clients we worked with
        </p>
        <div
          className="client-logo d-flex flex-wrap justify-content-between gap-5"
          data-aos="fade-left"
          data-aos-duration="1000">
          <Tnw />
          <Google />
          <Nike />
          <Rbnb />
          <ItNews />
        </div>

        <div className="d-flex flex-wrap justify-content-between gap-2">
          <div
            className="client-card text-start"
            data-aos="flip-left"
            data-aos-duration="1000">
            <h3 className="title mb-3">Get in touch with us</h3>
            <p>Meacenas sed diam eget risus varius</p>
            <p className="mb-3">blandit sit amet non magna</p>
            <button className="button button-secondary">Hire us</button>
          </div>
          <div
            className="client-card text-start"
            data-aos="flip-right"
            data-aos-duration="1000">
            <h3 className="title mb-3">Our Projects</h3>
            <p>Meacenas sed diam eget risus varius</p>
            <p className="mb-3">blandit sit amet non magna</p>
            <button className="button button-secondary">See projects</button>
            <div className="image-services">
              <Image
                src={Phone}
                alt=""
                width={"300"}
                height={"auto"}
                className="image"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </StyledClient>
  );
};

export default Clients;
