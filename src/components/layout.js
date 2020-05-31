import React from "react"
import { Helmet } from "react-helmet"
import Loadable from "react-loadable"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import NavigationBar from "./sections/navigationBar"
import Footer from "./sections/footer"

import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const Container = styled.main`
  margin: 0 auto 0 auto;
  max-width: 800px;
  height: 100%;
  font-family: Balsamiq Sans;
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

const LoadingMessage = styled.span`
  color: #ffffff;
  font-size: 2rem;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "#212121",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}))

const LoadedParticles = Loadable({
  loader: () => import("./particlesBackground"),
  loading() {
    return (
      <LoadingContainer>
        <CircularProgress color="inherit" />
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <NavigationBar />
      <Container>
        <LoadedParticles />
        {children}
      </Container>
      <Footer />
    </>
  )
}
export default Layout
