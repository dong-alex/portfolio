import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useContacts = () => {
  const { contacts, connect } = useStaticQuery(graphql`
    query {
      contacts: allContactsJson {
        nodes {
          url
          name
          logo {
            childImageSharp {
              fixed(width: 64, height: 64, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      connect: file(relativePath: { eq: "images/connect-logo.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100, fit: INSIDE) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return {
    contacts: contacts.nodes,
    connectLogo: connect.childImageSharp.fixed,
  }
}

export default useContacts
