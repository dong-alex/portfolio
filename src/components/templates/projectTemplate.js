import React from "react"
import Card from "react-bootstrap/Card"
import Image from "gatsby-image"
import styled from "styled-components"
import LogoItem from "../logoItem"
import GithubLogo from "../../static/github-logo.svg"

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

const ProjectLinks = styled.div`
  margin: 0;
  padding-top: 1rem;
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
  title,
  technologies,
  imageData,
}) => {
  return (
    <CardContainer>
      <ProjectImage fluid={imageData} alt={title} draggable={false} />
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
        <HoverLogo href={github} target="_blank" rel="noreferrer">
          <img src={GithubLogo} width="64px" alt="Github Logo" />
        </HoverLogo>
      </ProjectLinks>
    </CardContainer>
  )
}

export default ProjectTemplate
