import { useStaticQuery, graphql } from "gatsby"

const useResume = () => {
  const image = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "resume-copy.pdf" }) {
        publicURL
      }
    }
  `)

  return {
    publicURL: image.resume.publicURL,
  }
}

export default useResume
