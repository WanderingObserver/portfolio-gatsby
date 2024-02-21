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
        <h1>Hey, it's nice to meet you.</h1>
        <p>
          I'm Mohammed Chisti, a fullstack developer based in my hometown, New York City.
        </p>
        <p>
          Feel free to look around. 
        </p>

        <div className='social-icons'>
          <a target='_blank' href="https://github.com/WanderingObserver"><i title="Github" className="fab fa-github fa-2x"></i></a>
          <a target='_blank' href="https://medium.com/@mchisti"><i title="Medium" className="fab fa-medium fa-2x"></i></a>
          <a target='_blank' href="https://codepen.io/mohammedchisti"><i title="Code Pen" className="fab fa-codepen fa-2x"></i></a>
        </div>

        <i>
          "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies."
        </i>
        <p>
          - C.A.R. Hoare, 1980 ACM Turing Award Lecture
        </p>
      </div>

      <div className='animated fadeInLeft center' id='hero-img'>
        <img  src={ HeroImg } alt='Hero Picture'/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
