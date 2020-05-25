import { useStaticQuery, graphql } from "gatsby"

const useTechnicalSkills = () => {
  const { gear, skills } = useStaticQuery(graphql`
    query {
      skills: allDataJson {
        nodes {
          frontend {
            name
            logo {
              childImageSharp {
                fixed(width: 32, height: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          backend {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          database {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          tools {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      gear: file(relativePath: { eq: "images/gear-icon.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100, fit: INSIDE) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return {
    gear,
    ...skills.nodes[0],
  }
}

export default useTechnicalSkills
