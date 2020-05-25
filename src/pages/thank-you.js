import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import ContactSection from "../components/sections/contact"
import RedirectLink from "../components/redirectLink"

const Header = styled.span`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`

const ThankYouMessage = styled.p`
  text-align: center;
`

const LinkContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const ThankYouPage = () => {
  return (
    <Layout>
      <Header>
        <h1>Contact</h1>
      </Header>
      <ThankYouMessage>
        Thank you for your submission! Feel free to connect below as well.
      </ThankYouMessage>
      <ContactSection />
      <LinkContainer>
        <RedirectLink text="Home" to="/" />
      </LinkContainer>
    </Layout>
  )
}

export default ThankYouPage
