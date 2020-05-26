import React from "react"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import LinkedInLogo from "../../static/linkedin.svg"
import GithubLogo from "../../static/github.svg"

const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 1rem 0 1 rem 0;
`

const ContactLogo = styled.img`
  margin: 2rem;
`

const ContactLink = styled.a`
  margin: 1rem;

  &:hover {
    img {
      transform: scale(1.1);
    }
    outline: solid 1px #ffffff;
  }
`

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactLink
        href="https://github.com/dong-alex"
        target="_blank"
        rel="noreferrer"
      >
        <ContactLogo src={GithubLogo} alt="github" />
      </ContactLink>
      <ContactLink
        href="https://www.linkedin.com/in/dongalex/"
        target="_blank"
        rel="noreferrer"
      >
        <ContactLogo src={LinkedInLogo} alt="linkedin"></ContactLogo>
      </ContactLink>
    </ContactContainer>
  )
}

export default ContactSection
