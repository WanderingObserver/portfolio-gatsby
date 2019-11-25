import React, { Component } from 'react'

import Layout from "../components/layout"

import "../components/stylesheets/about.css"
import Resume from '../resources/resume-mohammed-chisti.pdf'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About Me</h1>
        <p>
          Hi, my name is Mohammed Chisti. I am based in New York City, NY. I am
          a software developer specilized in building and designing things for
          the internet.
        </p>
        <p>
          You can get a quick synopsis of my work and experience through
          my <a href={ Resume }>resume</a>.
        </p>
        <p>
          Here are a few technologies I currently work with:
        </p>
        <div className="wrap-grid">
          <ul className="skills-card">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Rails</li>
          </ul>
          <ul className="skills-card">
            <li>HTML</li>
            <li>CSS</li>
            <li>PosgreSQL</li>
          </ul>
        </div>
      </Layout>
    )
  }
}
