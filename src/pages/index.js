import React from "react"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RedirectLink from "../components/redirectLink"

const HomeContainer = styled(Container)`
  display: flex;
  height: 100%;
  margin: 0;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="The website of Alex Dong, a recent computer science graduate from the University of Alberta. Learn about his expertise and education."
      />
      <HomeContainer>
        <h1>Hi, I'm Alex, a software developer from Edmonton, Alberta.</h1>
        <RedirectLink text="About me" to="/about" />
        <RedirectLink text="My Projects" to="/projects" />
        <RedirectLink text="Connect" to="/connect" />
      </HomeContainer>
    </Layout>
  )
}

export default IndexPage
