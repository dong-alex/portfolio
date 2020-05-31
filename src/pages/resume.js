import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import useResume from "../components/hooks/useResume"
import SEO from "../components/seo"

const ResumeLink = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  margin: 0 auto 2rem auto;
  color: #ffffff;
`

const DownloadButton = styled(Button)``

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

const InterestHeader = styled.h4`
  margin: 2rem 0 2rem 0;
  text-align: center;
`

const ResumePage = () => {
  const { image, publicURL } = useResume()
  return (
    <Layout>
      <SEO
        title="Resume"
        description="View my work experiences as a growing software developer during my university career."
      />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Header>Resume</Header>
        <Image fluid={image} alt="resume" />
        <InterestHeader>Interested in what you see?</InterestHeader>
        <ResumeLink href={publicURL} download>
          <DownloadButton size="lg">Download Resume</DownloadButton>
        </ResumeLink>
      </Container>
    </Layout>
  )
}

export default ResumePage
