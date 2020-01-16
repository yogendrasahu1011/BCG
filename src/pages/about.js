import React from "react"
import Layout from "../components/Globals/layout.js"
import From from "../components/form"
import { Link, graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="about us"
        styleClass="about-background"
      />
      <From />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    img: file(relativePath: { eq: "about_background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
