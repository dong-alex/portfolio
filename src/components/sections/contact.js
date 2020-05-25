import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import LinkedInLogo from "../static/linkedin.svg"
import GithubLogo from "../static/github.svg"

const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const Header = styled.span`
  display: flex;
  justify-content: center;
`

const ContactLogo = styled.img`
  margin: 2rem;
  &:hover {
    transform: scale(1.1);
  }
`

const ContactSection = () => {
  return (
    <ContactContainer>
      <a href="https://github.com/dong-alex" target="_blank" rel="noreferrer">
        <ContactLogo src={GithubLogo} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/dongalex/"
        target="_blank"
        rel="noreferrer"
      >
        <ContactLogo src={LinkedInLogo} alt="linkedin" />
      </a>
    </ContactContainer>
  )
}

export default ContactSection
