import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
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

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

const ResumeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ResumePage = () => {
  const { publicURL } = useResume()

  return (
    <Layout>
      <SEO
        title="Resume"
        description="View my work experiences as a growing software developer during my university career."
      />
      <ResumeContainer>
        <Header>Interested in what you see?</Header>
        <ResumeLink href={publicURL} download>
          <Button variant="secondary" size="lg">
            Download Resume
          </Button>
        </ResumeLink>
      </ResumeContainer>
    </Layout>
  )
}

export default ResumePage
