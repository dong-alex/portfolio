import React from "react"
import Layout from "../components/layout"
import ContactSection from "../components/sections/contact"
import styled from "styled-components"

const Header = styled.span`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`

const ThankYouMessage = styled.p`
  text-align: center;
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
    </Layout>
  )
}

export default ThankYouPage
