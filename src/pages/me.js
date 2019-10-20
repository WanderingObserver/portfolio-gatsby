import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const MePage = () =>
  <Layout>
    <SEO title="Me"/>
    <h1 className="underline">Me</h1>
    <p>
      Oh. Hey there. You found me. You found me?
    </p>
    <p>
      I never placed this page on my navigation menu. I wonder if you typed "me"
      on the URL bar. Perhaps you were rummaging through Github or maybe you
      happened to be searching through my files on the inspection tab and
      stumbled upon this file. Or. Just maybe. You were truly awe inspired by
      me.
    </p>
    <p>
      Nonetheless. You did find me. Bravo.
    </p>
    <p>
      Easter Egg.
    </p>
    <p>
      These are some things I personally indulge in. Aside from the
      whole, let's keep things "stricly business". The "human" things.
      Oh man, the times I've wasted on these. But you know what they say,
      wasted time is never wasted time.
    </p>

    <h1 className="underline">Secret Curaited List of Favorites</h1>

    <div className="card-grid">
      <div>
        <h3>#001</h3>
        <p>
          I love <a className="link" target="__blank" href="https://www.youtube.com/watch?v=SLqVJHfnAyE">lo-fi</a>.
        </p>
      </div>

      <div>
        <h3>#002</h3>
        <p>
          I reluctantly cried to this <a className="link" target="__blank" href="https://www.netflix.com/title/80223226">anime movie</a>.
        </p>
      </div>

      <div>
        <h3>#003</h3>
        <p>
          <a className="link" target="__blank" href="https://www.amazon.com/Flowers-Algernon-Daniel-Keyes-ebook/dp/B003WJQ74E/ref=sr_1_1?crid=39ZVDRQBTO8XJ&keywords=flowers+for+algernon&qid=1571098796&s=digital-text&sprefix=flowers+for%2Cdigital-text%2C135&sr=1-1">Novel</a> that I still think about.
        </p>
      </div>

      <div>
        <h3>#004</h3>
        <p>
          <a className="link" target="__blank" href="https://athome.starbucks.com/product/caffe-verona/?format=whole-bean">Coffee</a> I brew in the morning. I grind my beans right before, for that little extra premium taste.
        </p>
      </div>
    </div>
  </Layout>


export default MePage
