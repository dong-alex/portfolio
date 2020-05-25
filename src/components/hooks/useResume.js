import { useStaticQuery, graphql } from "gatsby"

const useResume = () => {
  const image = useStaticQuery(graphql`
    query {
      preview: file(relativePath: { eq: "images/resume-preview.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resume: file(relativePath: { eq: "resume-copy.pdf" }) {
        publicURL
      }
    }
  `)
  return {
    image: image.preview.childImageSharp.fluid,
    publicURL: image.resume.publicURL,
  }
}

export default useResume
