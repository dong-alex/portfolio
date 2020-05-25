/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // only for uncompleted slugs - if assigned prior - skip
  // const { createNodeField } = actions
  // if (node.internal.type === "ProjectsJson") {
  //   const slug = createFilePath({ node, getNode, basePath: "projects" })
  //   createNodeField({
  //     node,
  //     name: "slug",
  //     value: slug,
  //   })
  // }
}

// exports.createSchemaCustomization = ({ actions, schema}) => {
// 	const { createTypes} = actions
// 	const typeDefs = [`
// 		type
// 	`]
// 	createTypes(typeDefs)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/components/templates/detailedProject.js")
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allProjectsJson.edges.forEach(({ node: project }) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: template,
      context: {
        // data passed to the template as graphQL variables in the query
        slug: project.slug,
        technologies: project.technologies,
      },
    })
  })
}
