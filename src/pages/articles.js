import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <h1 className="underline">Articles</h1>
    <p>This is where I have all my articles posted.</p>

    <h3>Categories</h3>
    <ul>
      <li>Code</li>
      <li>Review</li>
    </ul>
  </Layout>
)

export default ArticlesPage
