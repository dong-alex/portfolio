import { useStaticQuery, graphql } from "gatsby"

const useEducation = () => {
  const {
    graduationHat,
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
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      graduationHat: file(
        relativePath: { eq: "images/graduation-white-logo.png" }
      ) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100, fit: INSIDE) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return {
    graduationHat,
    location,
    institution,
    courses,
    graduation,
    logo,
    degree,
  }
}

export default useEducation
