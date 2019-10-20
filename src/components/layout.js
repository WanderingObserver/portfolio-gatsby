/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./stylesheets/layout.css"
import "./stylesheets/footer.css"
import "./stylesheets/nav.css"
import "./stylesheets/stuff.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-container">
      <Header siteTitle={data.site.siteMetadata.title} />

      <aside className="side-nav"></aside>

      <main className="main">{ children }</main>

      <footer className="footer">
        <a href="#">Hire Me</a>

        <input type="text" name="" value="" placeholder="email"/>
        <button className="light" type="button" name="button">Subscribe</button>

        <div>
          © {new Date().getFullYear()} Mohammed Chisti. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
