import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import LogoItem from "../logoItem"
import useTechnicalSkills from "../hooks/useTechnicalSkills"

const TechnologyGroup = styled(ListGroup)`
  border-radius: 20px;
  &:first-child {
    margin-top: 1rem;
  }
  margin: 2rem auto;
`

const TechnologyItem = styled(ListGroup.Item)`
  margin: 0;
  display: flex;
  justify-content: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Header = styled.span`
  display: flex;
  justify-content: center;
`

const SkillsSection = () => {
  const { backend, frontend, database, tools, cloud } = useTechnicalSkills()

  const layout = [
    { title: "Front-end", data: frontend },
    { title: "Back-end", data: backend },
    { title: "Database", data: database },
    { title: "Tools", data: tools },
    { title: "Cloud", data: cloud}
  ]

  return (
    <>
      <Header>
        <h1>Skillset</h1>
      </Header>
      <Container fluid>
        <Row>
          {layout.map(({ title, data }) => (
            <Col xs={12} md={6}>
              <TechnologyGroup>
                <TechnologyItem>{title}</TechnologyItem>
                {data.map(({ name, logo }) => (
                  <TechnologyItem>
                    <LogoItem
                      text={name}
                      image={logo.childImageSharp.fixed}
                      alt={name}
                    />
                  </TechnologyItem>
                ))}
              </TechnologyGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default SkillsSection
