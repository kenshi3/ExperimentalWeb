/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import Header from './Header';
import Footer from './Footer';
import "../css/new-layout.css"
import "../css/layout.css"
import "../css/default.css"
// import "../css/fonts.css"
import "../css/media-queries.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <Footer />
          © {new Date().getFullYear()}, Made by Kenshi Lau
        </footer>
      {/* </div> */}
    </>
  )
}

export default Layout
