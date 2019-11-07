import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//         <li><Link to="/articles">Articles</Link></li>
//         <li><Link to="/work">Work</Link></li>
//         <li><Link to="/hire">Hire</Link></li>
//         <li><Link to="/stuff">Stuff</Link></li>

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h3><Link to="/">Mohammed Chisti</Link> - { siteTitle }</h3>
      <ul>
        <li><Link to="/hire">Hire</Link></li>
        <li><Link to="/stuff">Stuff</Link></li>
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
