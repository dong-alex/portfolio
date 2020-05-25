import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import useContacts from "../components/hooks/useContacts"
import Container from "react-bootstrap/Container"
import SEO from "../components/seo"
import LinkedInLogo from "../static/linkedin.svg"
import GithubLogo from "../static/github.svg"
import NetlifyForm from "../components/sections/netlifyForm"
import ContactSection from "../components/sections/contact"

const Header = styled.span`
  display: flex;
  justify-content: center;
`

const ConnectPage = () => {
  const { contacts } = useContacts()

  return (
    <Layout>
      <SEO title="Connect" />
      <Header>
        <h2>Connect</h2>
      </Header>
      <ContactSection />
      <NetlifyForm />
    </Layout>
  )
}

export default ConnectPage
