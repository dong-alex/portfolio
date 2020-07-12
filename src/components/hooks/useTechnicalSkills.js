import { useStaticQuery, graphql } from "gatsby"

const useTechnicalSkills = () => {
  const { skills } = useStaticQuery(graphql`
    query {
      skills: allDataJson {
        nodes {
          frontend {
            name
            logo {
              childImageSharp {
                fixed(width: 32, height: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
          backend {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
          database {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
          tools {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
          cloud {
            name
            logo {
              childImageSharp {
                fixed(height: 32, width: 32, quality: 100, fit: INSIDE) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
  `)

  return {
    ...skills.nodes[0],
  }
}

export default useTechnicalSkills
