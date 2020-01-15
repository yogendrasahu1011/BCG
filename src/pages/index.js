import React from "react"
import Layout from "../components/Globals/layout.js"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Bhilai Custom Gifts"
      styleClass="default-background"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GastbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
