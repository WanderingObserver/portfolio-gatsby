import React, { Component } from 'react'

import Layout from "../components/layout"

export default class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About Me</h1>
        <p>
          Hello! I'm Mohammed Chisti, based in New York City, NY and I enjoy
          building things for the web.
        </p>
        <p>
          Here are a few technologies I work with currently:
        </p>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Rails</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>PosgreSQL</li>
        </ul>
      </Layout>
    )
  }
}
