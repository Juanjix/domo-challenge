// Styled
import styled from "styled-components";

// Utils
import { colors } from "../../utils/variables";

// Icons
import Linkedin from "../../assets/icons/linkedin";
import Facebook from "../../assets/icons/facebook";
import Twitter from "../../assets/icons/twitter";
import Instagram from "../../assets/icons/instagram";

// Components
import Container from "../container";
import Link from "next/link";

const StyledFooter = styled.section`
  background-color: ${colors.grey__200};
  padding: 150px 0 100px 0;

  li {
    color: ${colors.grey__100};
    font-size: 14px;
    cursor: pointer;

    &:hover{
      color: ${colors.lavender}
    }
  .titles {
    color: white;
  }

  svg {
    margin-top: 40px;
    margin-right: 20px;
    width: 25px;

    * {
      fill: ${colors.grey__100};
    }

    &:hover {
      * {
        fill: ${colors.grey__50};
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container data-aos="fade-in" data-aos-duration="1000">
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 text">
            <p className="text--s titles mb-4">Compleet labs</p>
            <p className="text--s">
              Este proyecto, es challenge para la agencia de diseño{" "}
              <Link href="https://domo.com">DOMO</Link>, fue desarrollado
              meticulosamente por Juan José Peralta. Utilizando un enfoque
              centrado en la excelencia técnica, se emplearon tecnologías de
              vanguardia como Next.js, Styled Components, Sass y Vercel.
            </p>
            <div>
              <Twitter />
              <Link href="https://linkedin.com/in/juanjose-peralta">
                <Linkedin />
              </Link>
              <Link href="https://www.facebook.com/juanjose.peralta1/">
                <Facebook />
              </Link>

              <Link href="https://www.instagram.com/ultimamentejuanso/">
                <Instagram />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <p className="text--s titles mb-4">Sitemap</p>
            <ul>
              <li>Home</li>
              <li>Technology</li>
              <li>Services</li>
              <li>About</li>
            </ul>
          </div>
          <div className="col-12 col-md-2">
            <p className="text--s titles mb-4">Case studies</p>
            <ul>
              <li>Swiss Airlines</li>
              <li>Googles</li>
              <li>Apple</li>
              <li>Nike</li>
            </ul>
          </div>
          <div className="col-12 col-md-2">
            <p className="titles--s titles mb-4">Contact</p>
            <ul>
              <li>
                <Link href="https://www.juanso.dev/#portfolio">Jobs</Link>
              </li>
              <li>
                <Link href="https://juanso.dev">Hire me</Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/juanjose-peralta">
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
