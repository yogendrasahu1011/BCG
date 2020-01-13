/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import "../../../src/style.css"
import "../../bootstrap.min.css"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
