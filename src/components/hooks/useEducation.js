import { useStaticQuery, graphql } from "gatsby"

const useEducation = () => {
  const {
    education: { location, courses, institution, graduation, logo, degree },
  } = useStaticQuery(graphql`
    query {
      education: educationJson {
        courses
        degree
        institution
        graduation
        location
        logo {
          childImageSharp {
            fixed(height: 200, width: 200, quality: 100, fit: INSIDE) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  `)

  return {
    location,
    institution,
    courses,
    graduation,
    logo,
    degree,
  }
}

export default useEducation
