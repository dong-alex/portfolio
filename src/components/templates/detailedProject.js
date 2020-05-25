import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
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
`

const ProjectPost = ({ data }) => {
  const post = data.projectsJson
  const { title, description, technologies, githubURL, slug, id } = post
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
            fixed(width: 64, height: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      title
      image {
        publicURL {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectPost