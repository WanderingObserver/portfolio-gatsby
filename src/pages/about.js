import React, { Component } from 'react'

import Layout from "../components/layout"

import "../components/stylesheets/about.css"
import Resume from '../resources/resume-mohammed-chisti.pdf'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <div className="animated fadeIn">
          <h1>About Me</h1>
          <p>
            I am based in New York City, NY. I am
            a software developer specilized in building and designing things for
            the internet.
          </p>
          <p>
            I work on a wide variety of interesting projects on a daily basis.
            You can get a quick synopsis of my work and experience through
            my <a target="_blank" href={ Resume }>resume</a>.
          </p>
          <p>
            Here are a few technologies I have been currently working with:
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
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}
