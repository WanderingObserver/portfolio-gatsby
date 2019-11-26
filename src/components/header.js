import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Resume from '../resources/resume-mohammed-chisti.pdf'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h3><Link to="/">Mohammed Chisti</Link></h3>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><a target="_blank" href="https://medium.com/@mchisti" title="Medium Blogs">Articles</a></li>
        <li><Link to="/tidbits">Tidbits</Link></li>
        <li><Link to="/hire">Contact</Link></li>
        <li><a target="_blank" href={ Resume } title="PDF">Resume</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
