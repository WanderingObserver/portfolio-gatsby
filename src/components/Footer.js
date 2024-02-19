import React from 'react'
import { Link } from 'gatsby'

import './stylesheets/libraries/fontawesome-free-5.11.2-web/css/all.css'
import Resume from '../resources/resume-mohammed-chisti.pdf'

const Footer = () =>
  <footer className="footer">
    <div>
      <p>
        If you'd like to collaborate or grab a coffee, feel free to <Link to="/contact">reach out</Link>.
      </p>

      <div className='social-icons'>
        <a target='_blank' href="https://github.com/seeyouspacecowboy"><i title="Github" className="fab fa-github fa-2x"></i></a>
        <a target='_blank' href="https://medium.com/@mchisti"><i title="Medium" className="fab fa-medium fa-2x"></i></a>
        <a target='_blank' href="https://codepen.io/mohammedchisti"><i title="Code Pen" className="fab fa-codepen fa-2x"></i></a>
      </div>

      <div>
        <p>Built & Designed With ❤️</p>

        © { new Date().getFullYear() } Mohammed Chisti. All rights reserved.
      </div>
    </div>
  </footer>

export default Footer

/* 
  <a target='_blank' href={ Resume }><i title="Resume" className="far fa-file fa-2x"></i></a>

      <div className="subscribe">
      <h5>SUBSCRIBE</h5>
      <p>
        If you enjoyed anything on my site and want to keep getting updates,
        feel free to subscribe.
      </p>
      <input className='dark' type="text" name="" placeholder="Enter your email"/>
      <button className="dark" type="button" name="button">Subscribe</button>
    </div>
*/