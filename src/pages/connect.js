import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NetlifyForm from "../components/sections/netlifyForm"
import ContactSection from "../components/sections/contact"

const Header = styled.span`
  display: flex;
  justify-content: center;
`

const ConnectPage = () => {
  return (
    <Layout>
      <SEO
        title="Connect"
        description="If you have any questions or concerns, contact me for more information."
      />
      <Header>
        <h1>Connect</h1>
      </Header>
      <ContactSection />
      <NetlifyForm />
    </Layout>
  )
}

export default ConnectPage
