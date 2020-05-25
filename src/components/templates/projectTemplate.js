import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import Card from "react-bootstrap/Card"
import styled from "styled-components"
import LogoItem from "../logoItem"

const CardContainer = styled(Card)`
  width: 20rem;
  @media only screen (min-width: 728px) {
    width: 15rem;
  }
  margin: 2rem auto;
  border-radius: 2rem;
`

const TechnologyGroup = styled.ul`
  margin: 0;
  li.list-group-item {
    margin: 0;
    display: flex;
    justify-content: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

const HoverLink = styled(Link)`
  &:hover {
    ${Image} & {
      transform: scale(1.1);
    }
  }
`

const ProjectLinks = styled.div`
  margin: 10px 0 5px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const CardBody = styled.div`
  user-select: None;
`

const HoverLogo = styled.a`
  &:hover {
    ${Image} & {
      transform: scale(1.1);
    }
  }
`

const ProjectImage = styled(Image)`
  width: 128px;
  height: 128px;
  margin: 2rem auto 1rem auto;
`

const ProjectHeader = styled(Card.Header)`
  text-align: center;
`

const ProjectTemplate = ({
  slug,
  description,
  github,
  githubLogo,
  title,
  technologies,
  imageData,
}) => {
  return (
    <CardContainer>
      <HoverLink to={`/projects/${slug}`}>
        <ProjectImage fluid={imageData} alt={title} draggable={false} />
      </HoverLink>
      <ProjectHeader as="h5">{title}</ProjectHeader>
      <CardBody className="card-body">
        <p className="card-text">{description}</p>
      </CardBody>
      {technologies && (
        <TechnologyGroup className="list-group list-group-flush">
          {technologies.map(({ name, logo }, i) => {
            return (
              <li className="list-group-item" key={`${name}-${i}`}>
                <LogoItem
                  image={logo.childImageSharp.fixed}
                  alt={name}
                  text={name}
                />
              </li>
            )
          })}
        </TechnologyGroup>
      )}
      <ProjectLinks>
        <span>View on Github</span>
        <HoverLogo href={github} target="_blank" rel="noreferrer">
          <Image fixed={githubLogo} alt="github" />
        </HoverLogo>
      </ProjectLinks>
    </CardContainer>
  )
}

export default ProjectTemplate
