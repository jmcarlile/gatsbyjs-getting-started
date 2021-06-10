import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {
    blogHeader,
    blogDate,
    blogListItem,
} from './blog.module.css'

const BlogPage = ({data}) => {

    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            {
                data.allMarkdownRemark.edges.map(({node}) =>(
                    <li key={node.id} className={blogListItem}>
                        <h3 className={blogHeader}>
                            {node.frontmatter.title} 
                            <span className={blogDate}> - {node.frontmatter.date}</span>
                        </h3>
                        {/* <p>heelo</p> */}
                        <p>
                            {node.excerpt}
                        </p>
                        <hr />
                    </li>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage