import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class HireMePage extends Component {
  state = {
    name: "",
    website: "",
    comment: ""
  }

  render() {
    return (
      <Layout>
        <SEO title="Hire Me" />
        <h1 className="underline">Hire Me</h1>
        <p>I'm a developer who specializes in React + Redux and Rails.</p>
        <form>
          <textarea
            name="comment"
            placeholder="Leave a note. What kind of projects would you like to work on? I'm glad we're able to collaborate."
            /><br/>
          <input name="name" placeholder="Full name"/><br/>
          <input name="website" placeholder="Website (Optional)"/><br/>

          <button type="submit">Send</button>
        </form>
      </Layout>
    )
  }
}
