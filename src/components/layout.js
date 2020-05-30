import React from "react"
import { Helmet } from "react-helmet"
import Loadable from "react-loadable"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const Container = styled.main`
  margin: 6rem auto 6rem auto;
  max-width: 800px;
  height: 100%;
  font-family: Balsamiq Sans;
`

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 1240px) {
    flex-direction: row;
  }
`

const LogoItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 0.3ch;
  padding-top: 1rem;
  width: 100%;
  white-space: nowrap;

  svg {
    transform: rotate(0deg);
    transition: transform 600ms;
    width: 2rem;
    min-width: 2rem;
  }

  @media only screen and (max-width: 1240px) {
    display: none;
  }
`

const StyledSvg = styled.svg`
  fill: grey;
  width: 2rem;
  min-width: 2rem;
  margin: 0 1rem 0 1rem;
`

const NavLink = styled(AniLink)`
  display: flex;
  align-items: center;
  height: 5rem;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  filter: grayscale(100%) opacity(0.7);
  transition: 600ms;

  &:hover {
    background-color: #bdbdbd;
    filter: grayscale(0%) opacity(1);
  }

  &:hover ${LinkText} {
    text-decoration: none;
    text-style: unset;
  }

  @media only screen and (max-width: 1240px) {
    justify-content: center;
  }
`

const LinkText = styled.span`
  display: none;
  margin-left: 1rem;
`

const LogoText = styled.span`
  color: #ffffff;
  display: none;
  margin-left: 1rem;
`

const NavigationBar = styled.nav`
  position: fixed;
  background-color: #000000;
  transition: width 600ms ease;
  z-index: 1;

  li {
    width: 100%;
  }

  @media only screen and (max-width: 1240px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;

    li {
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 1240px) {
    top: 0;
    width: 5rem;
    height: 100%;

    &:hover {
      width: 16rem;

      ${LogoItem} svg {
        transform: rotate(-180deg);
      }

      ${LinkText}, ${LogoText} {
        display: block;
      }
    }
  }
`

const LoadedParticles = Loadable({
  loader: () => import("./particlesBackground"),
  loading() {
    return <div />
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavigationBar>
        <Nav>
          <LogoItem>
            <LogoText>@dong-alex</LogoText>
            <StyledSvg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
            </StyledSvg>
          </LogoItem>
          <li>
            <NavLink paintDrip hex="#212121" to="/">
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
              </StyledSvg>
              <LinkText>Home</LinkText>
            </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex="#212121" to="/projects">
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M16.25 6c.414 0 .75.336.75.75v9.5c0 .414-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75v-9.5c0-.414.336-.75.75-.75h9.5zm2.75 0c0-1.104-.896-2-2-2h-11c-1.104 0-2 .896-2 2v11c0 1.104.896 2 2 2h11c1.104 0 2-.896 2-2v-11zm-11 14v3h-1v-3h1zm4 0v3h-1v-3h1zm2 0v3h-1v-3h1zm-4 0v3h-1v-3h1zm6 0v3h-1v-3h1zm-8-20v3h-1v-3h1zm4 0v3h-1v-3h1zm2 0v3h-1v-3h1zm-4 0v3h-1v-3h1zm6 0v3h-1v-3h1zm4 15h3v1h-3v-1zm0-4h3v1h-3v-1zm0-2h3v1h-3v-1zm0 4h3v1h-3v-1zm0-6h3v1h-3v-1zm-20 8h3v1h-3v-1zm0-4h3v1h-3v-1zm0-2h3v1h-3v-1zm0 4h3v1h-3v-1zm0-6h3v1h-3v-1z" />
              </StyledSvg>
              <LinkText>Projects</LinkText>
            </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex="#212121" to="/about/">
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
              </StyledSvg>
              <LinkText>About</LinkText>
            </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex="#212121" to="/connect/">
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </StyledSvg>
              <LinkText>Connect</LinkText>
            </NavLink>
          </li>
          <li>
            <NavLink paintDrip hex="#212121" to="/resume">
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z" />
              </StyledSvg>
              <LinkText>Resume</LinkText>
            </NavLink>
          </li>
        </Nav>
      </NavigationBar>
      <Container>{children}</Container>
      <LoadedParticles />
    </>
  )
}
export default Layout
