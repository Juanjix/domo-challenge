// Styled
import styled from "styled-components";

// Utils
import { colors } from "../../utils/variables";

// Components
import Container from "../container";

const StyledMenu = styled.nav`
  background-color: ${colors.grey__200};
  color: white;
  padding: 20px 0;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Container>
        <ul className="d-flex justify-content-between">
          <div>
            <li>Compleet Labs </li>
          </div>
          <div className="d-flex justify-content-between">
            <li>Home</li>
            <li>Services</li>
            <li>Technologies</li>
            <li>Case Studies</li>
            <li>About</li>
            <li>Hire us</li>
          </div>
        </ul>
      </Container>
    </StyledMenu>
  );
};

export default Menu;
