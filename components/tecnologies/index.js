"use client";

// Styled
import styled from "styled-components";

// Utils
import { colors } from "../../utils/variables";

// Icons
import IconHTML from "../../assets/icons/html";
import IconCSS from "../../assets/icons/css";
import IconJS from "../../assets/icons/js";
import IconSass from "../../assets/icons/sass";
import IconPython from "../../assets/icons/python";
import IconAngular from "../../assets/icons/angular";

// Container
import Container from "../container";

const StyledTecnologies = styled.section`
  background-color: ${colors.blue__50};
  color: white;

  .title {
    font-size: 28px;
  }

  svg {
    width: 50px;
    * {
      fill: white;
      stroke: white;
    }
  }

  p {
    color: ${colors.lavender};
  }
`;

const Tecnologies = () => {
  return (
    <StyledTecnologies>
      <Container>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <h3 className="title mb-3 heading--l">
              We use cutting edge technology
            </h3>
            <p>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
              lacinia bibendum nulla sed consectetur. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula
              porta felis euismod semper. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor.
            </p>
          </div>

          <div className="col-12 col-md-3">
            <div>
              <div className="row d-flex justify-content-evenly align-items-center gy-5 gx-5 mb-5">
                <IconHTML />
                <IconCSS />
              </div>
              <div className="row d-flex justify-content-evenly align-items-center gy-5 gx-5 mb-5">
                <IconAngular />
                <IconJS />
              </div>
              <div className="row d-flex justify-content-evenly align-items-center gy-5 gx-5">
                <IconPython />
                <IconSass />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyledTecnologies>
  );
};

export default Tecnologies;
