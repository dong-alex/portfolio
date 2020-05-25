import React from "react"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowRightCircle from "../static/arrow-right-circle.svg"

const HomeContainer = styled(Container)`
  height: 70vh;
  margin: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  h1 {
    user-select: none;
  }
`

const RedirectSpan = styled.span`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 1.5rem;
  text-decoration: none;
  user-select: none;
  text-transform: uppercase;
`

const RedirectLink = styled(AniLink)`
  user-select: none;
  margin: 0 0 0 0.8rem;

  img {
    margin: 0;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeContainer>
        <h1>Hi, I'm Alex, a software developer from Edmonton, Alberta.</h1>
        <RedirectSpan>
          About me
          <RedirectLink paintDrip hex="#212121" to="/about">
            <img src={ArrowRightCircle} alt="right arrow" />
          </RedirectLink>
        </RedirectSpan>
        <RedirectSpan>
          My Projects
          <RedirectLink paintDrip hex="#212121" to="/projects">
            <img src={ArrowRightCircle} alt="right arrow" />
          </RedirectLink>
        </RedirectSpan>
        <RedirectSpan>
          Connect
          <RedirectLink paintDrip hex="#212121" to="/connect" duration={1}>
            <img src={ArrowRightCircle} alt="right arrow" />
          </RedirectLink>
        </RedirectSpan>
      </HomeContainer>
    </Layout>
  )
}

export default IndexPage
