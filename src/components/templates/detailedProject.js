import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../layout"

const Title = styled.h2`
  text-align: center;
`

const Details = styled.p`
  text-align: center;
`

const StyledLayout = styled(Layout)`
  p {
    text-align: center;
    color: blue;
  }
`

const ProjectImage = styled(Image)`
  max-width: 128px;
  max-height: 128px;
  margin: 2rem auto 1rem auto;
`

const TechnologyContainer = styled.div`
  justify-content: center;
  display: flex;
  margin: 1rem 0 1rem 0;
`

const ProjectPost = ({ data }) => {
  const post = data.projectsJson
  const {
    title,
    description,
    technologies,
    extra: { projectImageURLs },
  } = post
  const imageData = post.image.publicURL.childImageSharp.fluid
  return (
    <StyledLayout>
      <ProjectImage fluid={imageData} alt={title} className="project-image" />
      <Title>{title}</Title>
      <TechnologyContainer>
        {technologies.map(({ name, logo }) => {
          const imageLogo = logo.childImageSharp.fixed
          return (
            <Image fixed={imageLogo} alt={name} className="technology-logo" />
          )
        })}
      </TechnologyContainer>
      <Details>{description}</Details>
      <Row>
        {projectImageURLs.map(image => (
          <Col sm={12} md={6}>
            <Image fluid={image.childImageSharp.fluid} alt="project-image" />
          </Col>
        ))}
      </Row>
    </StyledLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      githubURL
      id
      description
      technologies {
        name
        logo {
          childImageSharp {
            fixed(width: 64, height: 64, fit: INSIDE) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
      title
      image {
        publicURL {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      extra {
        projectImageURLs {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300, quality: 100, fit: INSIDE) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default ProjectPost
