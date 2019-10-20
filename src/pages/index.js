import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Devevloper" />

    <div className="excerpt">
      <div>
        <h1>Hello, it's nice to meet you.</h1>
        <p>
          My name is Mohammed Chisti and I'm a Web Developer based in New
          York City, NY.
        </p>
        <p>
          Take a look around. I've built this website to help me both document
          and share the things I continue to learn as a developer. If you like
          my work, feel free to reach out, I'm for hire. Or say "Hello" too.
        </p>
      </div>

      <div style={{ margin: `1%` }}>
        <Image id="hero-img" />
      </div>
    </div>

    <div>
      <h2>Work</h2>
    </div>
  </Layout>
)

export default IndexPage
