import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import StuffList from '../components/StuffList'

const TidbitsPage = () =>
  <Layout>
    <SEO title="Stuff"/>
    <h1 className="underline">Tidbits</h1>
    <p>
      This page is a list of things I wanted to make easily accessible to share
      with you, but didn't really find a reason to create it's own tab or
      article for them. Most of them are resources I use, which I hope to bookmark
      through this page and hope that others find it to be of great use, as have
      I.
    </p>

    <div className="card-grid">
      <StuffList
        title={ 'Developer Blogs' }
        synopsis={ 'A list of developer blogs I follow to keep me up to date with what I need to know.' }
        list={
          [
            {
              link: 'https://overreacted.io',
              title: 'Dan Abramov',
              snippet: 'React Overlord'
            },
            {
              link: 'https://lord.io',
              title: 'Robert Lord',
              snippet: 'Inspiringly minimal'
            },
            {
              link: 'https://www.taniarascia.com',
              title: 'Tania Rascia',
              snippet: 'Simple and short articles to read while you drink your morning coffee'
            }
          ]
        }
      />

      <StuffList
        title={ 'Quick Tuts' }
        synopsis={ "Tutorials that's helped me a learn in a short amount of time. I love the CSS game tutorials a ton." }
        list={
          [
            {
              link: 'https://cssgridgarden.com',
              title: 'Grid Garden',
              snippet: 'CSS grid game tutorial'
            },
            {
              link: 'https://flexboxfroggy.com',
              title: 'Flexbox Froggy',
              snippet: 'CSS flexbox game tutorial'
            },
            {
              link: 'https://flukeout.github.io',
              title: 'Flukeout',
              snippet: 'CSS Selectors game tutorial'
            },
          ]
        }
      />

      <StuffList
        title={ 'CSS Frameworks & Plugins' }
        synopsis={ 'Frameworks that help me throws things to together quickly.' }
        list={
          [
            {
              link: 'https://daneden.github.io/animate.css/',
              title: 'Animated.css',
              snippet: 'A quick way to add animation to your website'
            },
            {
              link: 'http://getskeleton.com',
              title: 'Get Skeleton',
              snippet: 'A dead simple, responsive boilerplate'
            },
            {
              link: 'https://pawelgrzybek.github.io/siema/',
              title: 'Siema',
              snippet: `A lightweight (only 3kb gzipped) carousel plugin with no dependencies and no styling by Pawel Grzybek`
            },
          ]
        }
      />

      <StuffList
        title={ 'APIs' }
        synopsis={ 'APIs I think are pretty neat to explore or safe keep.' }
        list={
          [
            {
              link: 'https://newsapi.org',
              title: 'News API',
              snippet: 'A free API for pulling news. The data is just usuable, hassle free'
            },
            {
              link: 'https://ziptasticapi.com',
              title: 'Ziptastic',
              snippet: 'Minimal API that returns the Country, State, City of the zip code you supply'
            },
            {
              link: 'https://worldtradingdata.com',
              title: 'World Trading Data',
              snippet: "Stock market API, something that's hard to find"
            },
            {
              link: 'https://geo-info.co',
              title: 'Geocoding',
              snippet: 'Turning coordinates into human readable locations. Great to pair with Google Maps API'
            },
          ]
        }
      />

      <StuffList
        title={ 'Udemy Courses' }
        synopsis={ "Some courses I've already had the liberty of doing and would love to pass onto anyone who's looking for good material to learn for." }
        list={
          [
            {
              link: 'https://www.udemy.com/course/react-redux/learn/lecture/5691826#overview',
              title: 'Modern React w. Redux',
              snippet: 'React + Redux course by Stephan Grider. Absolutely the best instructor I can possibly imagine. The course is throughly maintained and updated'
            },
            {
              link: 'https://www.udemy.com/course/nodejs-master-class/learn/lecture/9993132#overview',
              title: 'Node',
              snippet: 'NodeJs course by Mosh Hamedani. Straight forward and to the point'
            },
          ]
        }
      />

      <StuffList
        title={ 'Other Bits' }
        synopsis={ 'These sites are pretty category-less. But definitely useful.' }
        list={
          [
            {
              link: 'https://devhints.io',
              title: "Rico's Cheatsheets",
              snippet: 'A collection of cheatsheets from Rico Sta. Cruz'
            },
            {
              link: 'http://bettermotherfuckingwebsite.com',
              title: 'Better Motherfucking Website',
              snippet: 'A masterpiece website written using only 7 lines of CSS'
            },
            {
              link: 'http://repl.it',
              title: 'Repl',
              snippet: 'An instant IDE to learn, build, collaborate, and host all in one place'
            },
            {
              link: 'https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/',
              title: 'Flexbox Playground by Scotch',
              snippet: 'A masterpiece website written using only 7 lines of CSS'
            },
          ]
        }
      />
    </div>
  </Layout>

export default TidbitsPage
