import React from "react"
import { Helmet } from "react-helmet"
import Loadable from "react-loadable"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

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

const NavLink = styled(AniLink)`
  display: inline-block;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;

  :not(:last-child) {
    margin-right: 1rem;
  }
`

const NavigationBar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          @dong-alex
        </Typography>
        <NavLink paintDrip hex="#212121" to="/#">
          Home
        </NavLink>
        <NavLink paintDrip hex="#212121" to="/#projects-section">
          Projects
        </NavLink>
        <NavLink paintDrip hex="#212121" to="/about/">
          About
        </NavLink>
        <NavLink paintDrip hex="#212121" to="/connect/">
          Connect
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar
