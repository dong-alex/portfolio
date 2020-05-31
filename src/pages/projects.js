import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import ProjectTemplate from "../components/templates/projectTemplate"
import SEO from "../components/seo"

const ProjectsContainer = styled.div`
  text-align: center;
`

const ProjectsPage = () => {
  const { projects } = useStaticQuery(
    graphql`
      query {
        projects: allProjectsJson {
          edges {
            node {
              id
              githubURL
              description
              slug
              technologies {
                name
                logo {
                  childImageSharp {
                    fixed(width: 40, height: 40, quality: 100, fit: INSIDE) {
                      ...GatsbyImageSharpFixed_noBase64
                    }
                  }
                }
              }
              title
              image {
                publicURL {
                  childImageSharp {
                    fluid(quality: 100, fit: INSIDE) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const personalProjects = projects.edges

  return (
    <Layout>
      <SEO
        title="Projects"
        description="Explore the personal projects and the technologies used. View a project with their Github links provided to see how it works."
      />
      <ProjectsContainer className="container" id="projects-section">
        <h1>Projects</h1>
      </ProjectsContainer>
      <Container fluid>
        <Row>
          {personalProjects.map(({ node: project }, i) => {
            const {
              title,
              description,
              technologies,
              githubURL,
              slug,
              id,
            } = project
            const imageData = project.image.publicURL.childImageSharp.fluid
            return (
              <Col md={12} lg={6} key={id}>
                <ProjectTemplate
                  title={title}
                  description={description}
                  slug={slug}
                  technologies={technologies}
                  github={githubURL}
                  imageData={imageData}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
