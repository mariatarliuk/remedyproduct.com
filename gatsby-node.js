const path = require('path')
const cases = require("./src/resources/cases.json")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  cases.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/pages/project.js'),
      context: {...page},
    })
  })

  pages.data.allPrismicPost.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Post.js'),
      context: { ...page },
    })
  })
}

