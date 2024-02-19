import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import StuffList from '../components/StuffList'

const TidbitsPage = () =>
  <Layout>
    <SEO title="Stuff"/>

    <div className="animated fadeIn">
      <h1 className="underline">Tidbits</h1>
      <p>
        This is a tidbit of things I've found along the way.
      </p>

      <div className="card-grid">
        <StuffList
          title={ 'Developer Blogs' }
          synopsis={ '' }
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
          synopsis={ "" }
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
          synopsis={ '' }
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
          synopsis={ 'Fun easy APIs' }
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
          title={ 'Other Bits' }
          synopsis={ '' }
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
              {
                link: 'https://flatuicolors.com/',
                title: 'Flat UI Colors',
                snippet: 'Find curated color palettes'
              },
              {
                link: 'https://npmtrends.com/',
                title: 'NPM Trends',
                snippet: 'Find out what the industry standard is by comparing trends'
              },
            ]
          }
        />
      </div>
    </div>
  </Layout>

export default TidbitsPage

/*
        <StuffList
          title={ 'Udemy Courses' }
          synopsis={ "" }
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
*/