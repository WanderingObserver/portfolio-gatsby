import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Page Not found" />
    <h1>This page was lost</h1>
    <p>
      Just because your path is different, doesn't mean you're lost. Seems the
      page your looking for isn't available or it may have been moved.
    </p>
  </Layout>
)

export default NotFoundPage
