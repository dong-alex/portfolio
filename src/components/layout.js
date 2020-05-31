import React from "react"
import { Helmet } from "react-helmet"
import Loadable from "react-loadable"
import Navbar from "react-bootstrap/Navbar"
import Spinner from "react-bootstrap/Spinner"
import Nav from "react-bootstrap/Nav"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const NavLink = styled(AniLink)`
  display: inline-block;
  color: #ffffff;

  :not(:last-child) {
    margin-right: 1rem;
  }
`

const Brand = styled(Navbar.Brand)`
  color: white !important;
  margin-right: 3rem;
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
  margin: 6rem auto 6rem auto;
  max-width: 800px;
  height: 100%;
`

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 9999;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledSpinner = styled(Spinner)`
  height: 5rem;
  width: 5rem;
`

const LoadingMessage = styled.span`
  color: #ffffff;
  font-size: 2rem;
`

const LoadedParticles = Loadable({
  loader: () => import("./particlesBackground"),
  loading() {
    return (
      <LoadingContainer>
        <StyledSpinner animation="border" variant="light" />
        <LoadingMessage>Loading...</LoadingMessage>
      </LoadingContainer>
    )
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Navbar bg="dark" fixed="top" expand="sm">
        <NavLink paintDrip hex="#212121" to="/">
          <Brand>@dong-alex</Brand>
        </NavLink>
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
          </StyledNav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <LoadedParticles />
        {children}
      </Container>
    </>
  )
}
export default Layout
