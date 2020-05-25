import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import useContacts from "../components/hooks/useContacts"
import Container from "react-bootstrap/Container"
import SEO from "../components/seo"
import LinkedInLogo from "../static/linkedin.svg"
import GithubLogo from "../static/github.svg"
import NetlifyForm from "../components/netlifyForm"

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

const ConnectPage = () => {
  const { contacts } = useContacts()

  return (
    <Layout>
      <SEO title="Connect" />
      <Header>
        <h2>Connect</h2>
      </Header>
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
      <NetlifyForm />
    </Layout>
  )
}

export default ConnectPage
