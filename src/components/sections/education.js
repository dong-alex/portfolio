import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "gatsby-image"
import styled from "styled-components"
import useEducation from "../hooks/useEducation"

const Header = styled.span`
  display: flex;
  justify-content: center;
`

const EducationCard = styled(Card)`
  border: 0px;
  margin-bottom: 2rem;
`

const ImageContainer = styled.div`
  margin: 1rem 0px;
`

const EducationContainer = styled(Container)`
  margin-bottom: 2rem;
  * {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

const CardText = styled(Card.Text)`
  margin-bottom: 1rem;
`

const CourseSpan = styled.h5`
  color: #000000;

  text-align: center;
  margin: 1rem 0;
`

const CourseGroup = styled(ListGroup)`
  text-align: center;
`

const CourseItem = styled(ListGroup.Item)`
  margin: 0;
`

const EducationSection = () => {
  const { courses, logo, degree } = useEducation()

  return (
    <EducationContainer fluid>
      <Header>
        <h1>Education</h1>
      </Header>
      <EducationCard className="text-center">
        <ImageContainer>
          <Image fixed={logo.childImageSharp.fixed} />
        </ImageContainer>
        <CardText>{degree}</CardText>
        <CourseSpan>Highlight Courses</CourseSpan>
        <CourseGroup className="list-group-flush">
          {courses.map(course => (
            <CourseItem>{course}</CourseItem>
          ))}
        </CourseGroup>
      </EducationCard>
    </EducationContainer>
  )
}

export default EducationSection
