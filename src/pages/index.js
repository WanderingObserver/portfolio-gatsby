import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
// <Image id="hero-img" />
import HeroImg from "../resources/images/hero-1.jpeg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Devevloper" />

    <div className="excerpt" style={{ backgroundColor: `` }}>
      <div className="animated fadeIn delay-1s" style={{ paddingRight: `3%`, margin: `auto 0` }}>
        <h1>Hello, it's nice to meet you.</h1>
        <p>
          I'm Mohammed Chisti, a fullstack developer based in my hometown, New York City.
        </p>
        <p>
          Take a look around, it's a place I keep things that I'm interested in. 
        </p>
      </div>

      <div className='animated fadeInLeft center' id='hero-img'>
        <img  src={ HeroImg } alt='Hero Picture'/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
