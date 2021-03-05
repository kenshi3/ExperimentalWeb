import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from '../components/About'
import Resume from '../components/Resume'
// import Portfolio from '../components/Portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="App">
        <About />
        <Resume />
        {/* <Portfolio /> */}
      </div>
  </Layout>
)

export default IndexPage
