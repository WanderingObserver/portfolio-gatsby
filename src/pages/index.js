import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
// <Image id="hero-img" />
import HeroImg from "../resources/images/hero-0.jpeg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Devevloper" />

    <div className="excerpt" style={{ backgroundColor: `` }}>
      <div style={{ paddingRight: `3%`, margin: `auto 0` }}>
        <h1>Hello, it's nice to meet you.</h1>
        <p>
          My name is Mohammed Chisti and I'm a Web Developer based in New
          York City, NY.
        </p>
        <p>
          Take a look around. I've built this website to help me both document
          and share the things I continue to learn as a developer. If you like
          my work, feel free to reach out, I'm for hire. Or drop a "Hello" too.
        </p>
      </div>

      <div className='center' id='hero-img'>
        <img  src={ HeroImg } alt='Hero Picture'/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
