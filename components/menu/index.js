import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { colors } from "../../utils/variables";

const StyledMenu = styled.nav`
  width: 100vw;
  position: absolute;

  box-sizing: border-box;
  z-index: 9999;
  color: white;

  @media (min-width: 768px) {
    top: 26px;
  }

  ${Container} {
    margin: 32px auto;
  }

  .menu__content {
    width: 75vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
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
      position: relative;
      width: 100vh;
      height: auto;

      background-color: transparent;
      display: flex;
      opacity: 1;
      visibility: visible;
      padding: 0;
    }

    .content {
      padding: 32px 0;
      // width: 100vw;
      // position: absolute;

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
        color: ${colors.grey__100};
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
      align-items: center;
      padding: 10px;

      span {
        width: 20px;
        height: 4px;
        margin-bottom: 5px;
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
        <div className="d-md-flex align-items-center justify-content-between">
          <div className="menu__toggler">
            <div>
              <Link href="/" className="menu__link">
                Compleet labs
              </Link>
            </div>
            <button type="button" className="toggler" onClick={toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="menu__content">
          <div className="content">
            <div className="menu__toggler">
              <button
                type="button"
                className="toggler d-md-none"
                onClick={toggleMenu}>
                <span />
                <span />
              </button>
            </div>

            <ul className="d-md-flex">
              <li className="menu__item mb-5"></li>

              <div className="d-md-flex">
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
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </StyledMenu>
  );
};

export default Menu;
