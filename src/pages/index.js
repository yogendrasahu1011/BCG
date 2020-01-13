import React from "react"

import Layout from "../components/Globals/layout.js"
import "../../src/style.css"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-2xl text-teal-400">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
