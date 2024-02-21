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
          title={ 'Books' }
          synopsis={ '' }
          list={
            [
              {
                link: 'https://eloquentjavascript.net/',
                title: 'Eloquent JavaScript',
                snippet: '3rd edition (2018)'
              },
            ]
          }
        />

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
                snippet: 'Morning coffee articles'
              }
            ]
          }
        />

        <StuffList
          title={ 'Plugins & Boilerplates' }
          synopsis={ '' }
          list={
            [
              {
                link: 'https://daneden.github.io/animate.css/',
                title: 'Animated.css',
                snippet: 'Add animations'
              },
              {
                link: 'http://getskeleton.com',
                title: 'Get Skeleton',
                snippet: 'Responsive boilerplate'
              },
              {
                link: 'https://pawelgrzybek.github.io/siema/',
                title: 'Siema',
                snippet: `Carousel plugin`
              },
              {
                link: 'https://flatuicolors.com/',
                title: 'Flat UI Colors',
                snippet: 'Color palettes'
              }
            ]
          }
        />

        <StuffList
          title={ 'APIs' }
          synopsis={ '' }
          list={
            [
              {
                link: 'https://newsapi.org',
                title: 'News API',
                snippet: 'News Articles'
              },
              {
                link: 'https://ziptasticapi.com',
                title: 'Ziptastic',
                snippet: 'Address return from zipcodes'
              },
              {
                link: 'https://worldtradingdata.com',
                title: 'World Trading Data',
                snippet: "Stock market ticker watch"
              },
              {
                link: 'http://geo-info.co',
                title: 'Geocoding',
                snippet: 'Readable locations'
              },
            ]
          }
        />

        <StuffList
          title={ 'Mini Games' }
          synopsis={ "" }
          list={
            [
              {
                link: 'https://cssgridgarden.com',
                title: 'Grid Garden (css)',
                snippet: 'Grid'
              },
              {
                link: 'https://flexboxfroggy.com',
                title: 'Flexbox Froggy (css)',
                snippet: 'Flexbox'
              },
              {
                link: 'https://flukeout.github.io',
                title: 'Flukeout (css)',
                snippet: 'Selectors'
              },
            ]
          }
        />

        <StuffList
          title={ 'Crumbs' }
          synopsis={ '' }
          list={
            [
              {
                link: 'https://devhints.io',
                title: "Rico's Cheatsheets",
                snippet: ''
              },
              {
                link: 'http://bettermotherfuckingwebsite.com',
                title: 'Better Motherfucking Website',
                snippet: '7 Lines of CSS. All satire'
              },
              {
                link: 'http://repl.it',
                title: 'Repl',
                snippet: 'IDE Sandbox'
              },
              {
                link: 'https://npmtrends.com/',
                title: 'NPM Trends',
                snippet: 'Package trend data'
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