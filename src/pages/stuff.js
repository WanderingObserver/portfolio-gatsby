import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const StuffPage = () =>
  <Layout>
    <SEO title="Stuff"/>
    <h1 className="underline">Stuff</h1>
    <p>
      This page is a list of things I wanted to make easily accessible to share
      with you, but didn't really find a reason to create it's own tab or
      article for them. Most of them are resources I use, which I hope to bookmark
      through this page and hope that others find it to be of great use, as have
      I.
    </p>

    <div className="card-grid">
      <div>
        <h3>Developer Blogs</h3>
        <p>
          A list of developer blogs I follow to keep me up to date with what I
          need to know.
        </p>
        <ul>
          <li><a target="_blank" href="https://overreacted.io">Dan Abramov</a> - React Overlord.</li>
          <li><a target="_blank" href="https://lord.io">Robert Lord</a> - Inspiringly minimal.</li>
          <li><a target="_blank" href="https://www.taniarascia.com">Tania Rascia</a> - Simple and short articles to read while you drink your morning coffee.</li>
        </ul>
      </div>

      <div>
        <h3>Quick Tuts</h3>
        <p>Tutorials that's helped me a learn in a short amount of time. I love the CSS game tutorials a ton.</p>
        <ul>
          <li>
            <a target="_blank" href="https://cssgridgarden.com">Grid Garden</a> - CSS grid game tutorial.
          </li>
          <li>
            <a target="_blank" href="https://flexboxfroggy.com">Flexbox Froggy</a> - CSS flexbox game tutorial.
          </li>
          <li><a target="_blank" href="https://flukeout.github.io">Flukeout</a> - CSS Selectors game tutorial.</li>
        </ul>
      </div>

      <div>
        <h3>CSS Frameworks</h3>
        <p>Frameworks that help me throws things to together quickly</p>
        <ul>
          <li>
            <a target="_blank" href="https://daneden.github.io/animate.css/">Animated.css</a> - A quick way to add animation to your website.
          </li>
          <li><a target="_blank" href="http://getskeleton.com">Get Skeleton</a> - A dead simple, responsive boilerplate.</li>
        </ul>
      </div>

      <div>
        <h3>APIs</h3>
        <p>APIs I think are pretty neat to explore or safe keep.</p>
        <ul>
          <li>
            <a target="_blank" href="https://newsapi.org">News API</a> - A free API for pulling news. The data is just usuable, hassle free.
          </li>
          <li><a target="_blank" href="https://ziptasticapi.com">Ziptastic</a> - Minimal API that returns the Country, State, City of the zip code you supply.</li>
          <li><a target="_blank" href="https://worldtradingdata.com">World Trading Data</a> - Stock market API, something that's hard to find.</li>
          <li><a target="_blank" href="https://geo-info.co">Geocoding</a> - Turning coordinates into human readable locations. Great to pair with Google Maps API.</li>
        </ul>
      </div>

      <div>
        <h3>Udemy Courses</h3>
        <p>
          Some courses I've already had the liberty of doing and would love to
          pass onto anyone who's looking for good material to learn for.
        </p>
        <ul>
          <li><a target="_blank" href="https://www.udemy.com/course/react-redux/learn/lecture/5691826#overview">Modern React w. Redux</a> - React + Redux course by Stephan Grider. Absolutely the best instructor I can possibly imagine. The course is throughly maintained and updated.</li>
          <li><a target="_blank" href="https://www.udemy.com/course/nodejs-master-class/learn/lecture/9993132#overview">Node</a> - NodeJs course by Mosh Hamedani. Straight forward and to the point.</li>
        </ul>
      </div>

      <div>
        <h3>Sites</h3>
        <p>These sites are pretty category-less. But definetly useful.</p>
        <ul>
          <li><a target="_blank" href="https://devhints.io">Rico's Cheatsheets</a> - A collection of cheatsheets from <a target="_blank" href="https://ricostacruz.com">Rico Sta. Cruz</a>.</li>
          <li><a target="_blank" href="http://bettermotherfuckingwebsite.com">Better Motherfucking Website</a> - A masterpiece website written using only 7 lines of CSS.</li>
        </ul>
      </div>
    </div>

  </Layout>


export default StuffPage
