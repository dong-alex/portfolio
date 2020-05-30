/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const template = path.resolve("./src/components/templates/detailedProject.js")
//   const result = await graphql(`
//     {
//       allProjectsJson {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   result.data.allProjectsJson.edges.forEach(({ node: project }) => {
//     createPage({
//       path: `/projects/${project.slug}`,
//       component: template,
//       context: {
//         // data passed to the template as graphQL variables in the query
//         slug: project.slug,
//         technologies: project.technologies,
//       },
//     })
//   })
// }
