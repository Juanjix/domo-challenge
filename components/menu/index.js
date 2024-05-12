import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { colors } from "../../utils/variables";

const StyledMenu = styled.nav`
  width: 100vw;
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 9999;
  color: white;

  @media (min-width: 768px) {
    top: 26px;
  }

  ${Container} {
    margin: 32px auto;
  }

  .menu__logo {
    width: 120px;
    height: 32px;

    .logo {
      width: 100% !important;
      height: 100% !important;
    }

    @media (min-width: 992px) {
      width: 230px;
      height: 40px;
    }
  }

  .menu__content {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: none;
    background-color: ${colors.grey__100};
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    padding: 50px;

    ${(props) =>
      props.active &&
      css`
        display: block;
        opacity: 1;
        visibility: visible;
      `}

    @media (min-width: 990px) {
      width: auto;
      height: auto;
      position: relative;
      background-color: transparent;
      display: flex;
      opacity: 1;
      visibility: visible;
      padding: 0;
    }

    .content {
      padding: 32px 0;
      @media (min-width: 992px) {
        padding: 0;
      }

      .content__header {
        margin-bottom: 44px;
      }
    }

    .menu__item {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: 992px) {
        margin: 0 24px 0 0;
      }
    }

    .menu__link {
      color: ${colors.grey__400};
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.4em;
      transition: all 0.2s ease;

      &:focus-visible,
      &:hover {
        color: ${colors.green__500};
      }

      &--active {
        color: ${colors.green__500};
      }

      @media (min-width: 992px) {
        font-size: 1rem;
        line-height: 1.5em;
      }
    }
  }

  .menu__toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggler {
      display: flex;
      flex-direction: column;
      width: 20px;

      span {
        width: 100%;
        height: 2px;
        margin-bottom: 3px;
        background-color: ${colors.grey__200};
        border-radius: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`;

const Menu = () => {
  const [active, setActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <StyledMenu active={active} ref={ref}>
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          {/* <div className="menu__logo">
            <Image
              src={IconLogo}
              className="logo"
              width="230"
              height="40"
              alt=""
            />
          </div> */}

          <div className="menu__toggler">
            <button type="button" className="toggler" onClick={toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="menu__content">
          <div className="content">
            <ul className="d-lg-flex align-items-center">
              <li className="menu__item">
                <Link href="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/services" className="menu__link">
                  Services
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/technologies" className="menu__link">
                  Technologies
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/case-studies" className="menu__link">
                  Case Studies
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/about" className="menu__link">
                  About
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/hire-us" className="menu__link">
                  Hire us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledMenu>
  );
};

export default Menu;
