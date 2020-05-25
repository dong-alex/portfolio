import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Loadable from "react-loadable"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavLink = styled(AniLink)`
  margin-right: 1rem;
  display: inline-block;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
`

const Brand = styled(Navbar.Brand)`
  color: white !important;
  margin-right: 3rem;
  font-family: "Roboto Mono", monospace;
`

const StyledNavbar = styled(Navbar)`
  -moz-box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.6);
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.6);

  background-color: #000000;
`

const StyledNav = styled(Nav)`
  display: flex;
  flex-drection: row;

  @media (max-width: 575px) {
    a {
      & :first-child {
        margin-top: 1rem;
      }
      margin-bottom: 1rem;
    }
  }
`

const Container = styled.main`
  margin: 6rem auto 0 auto;
  max-width: 800px;
  height: 100%;
  font-family: Balsamiq Sans;
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
      <StyledNavbar bg="dark" fixed="top" expand="sm">
        <Brand>@dong-alex</Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <StyledNav>
            <NavLink paintDrip hex="#212121" to="/">
              Home
            </NavLink>
            <NavLink paintDrip hex="#212121" to="/projects">
              Projects
            </NavLink>
            <NavLink paintDrip hex="#212121" to="/about/">
              About
            </NavLink>
            <NavLink paintDrip hex="#212121" to="/connect/">
              Connect
            </NavLink>
            <NavLink paintDrip hex="#212121" to="/resume">
              Resume
            </NavLink>
          </StyledNav>
        </Navbar.Collapse>
      </StyledNavbar>
      <Container>{children}</Container>
      <LoadedParticles />
    </>
  )
}
export default Layout
