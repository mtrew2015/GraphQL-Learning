import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
  console.log(data)
  return(
    <Layout>
    <div>Hello Lambda</div>
    <h1>My Sites Files</h1>
    <table>
    <tr>
    <th>relativePath</th>
    <th>prettySize</th>
    <th>extensions</th>
    <th>birthTime</th>
    </tr>
    
    <tbody>
    {data.allFile.edges.map(({node}, index) => (
      <tr key={index}>
      <td>{node.relativePath}</td>
      <td>{node.prettySize}</td>
      <td>{node.extension}</td>
      <td>{node.birthTime}</td>
      </tr>
    ))}
    </tbody>
    </table>
    <div/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`