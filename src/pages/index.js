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
      <div className="animated fadeIn delay-1s" style={{ paddingRight: `3%`, margin: `auto 0` }}>
        <h1>Hello, it's nice to meet you.</h1>
        <p>
          My name is Mohammed Chisti and I am a Software Developer based in New
          York City, NY.
        </p>
        <p>
          Take a look around. I have built this website to help me both document
          and share the things I continue to learn as a developer. If you like
          my work, feel free to reach out, I am for hire. Or drop a "Hello" too.
        </p>
        <p id="disclaimer">
          Disclaimer: This website is still not where I want it to be yet and
          therefore still being polished. If you find any bugs, I would greatly
          appreciate it if you would bring them up to me. Thank you!
        </p>
      </div>

      <div className='animated fadeInLeft center' id='hero-img'>
        <img  src={ HeroImg } alt='Hero Picture'/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
