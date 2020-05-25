import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import useResume from "../components/hooks/useResume"
import SEO from "../components/seo"

const ResumeLink = styled.a`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  color: #ffffff;
  justify-content: center;
`

const ResumePage = () => {
  const { image, publicURL } = useResume()
  return (
    <Layout>
      <SEO title="Resume" />
      <ResumeLink href={publicURL} download>
        Download Resume
      </ResumeLink>
      <Image fluid={image} alt="resume" />
    </Layout>
  )
}

export default ResumePage
