import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class HireMePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      website: "",
      note: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    const field = event.target.name
    let partialState = {}
    partialState[field] = event.target.value
    this.setState(partialState);
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <h1 className="underline">Get In Touch</h1>
        <p>
          Whether you're looking to join me as an addition to your team, start a project or just to say Hi, I'll try my best to answer your email!
        </p>
        <form>
          <textarea
            name="note"
            placeholder="Leave a note. What kind of projects would you like to work on? I'm glad we're able to collaborate."
            value={ this.state.note }
            onChange={ this.handleChange }/><br/>
          <input name="name" placeholder="Full name" value={ this.state.name } onChange={ this.handleChange }/><br/>
          <input name="website" placeholder="Website (Optional)" value={ this.state.website } onChange={ this.handleChange }/><br/>

          <a href={ `mailto:93mchisti@gmail.com?subject=Hello!%20I'd%20Love%20to%20Reach%20Out!&body=Fullname%3A%0A${ this.state.name }%0A%0AWebsite%3A%0A${ this.state.website }%0A%0ANote%3A%0A${ this.state.note }%0A` }><button type="button">Send</button></a>
        </form>
      </Layout>
    )
  }
}
