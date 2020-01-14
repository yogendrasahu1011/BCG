import React from "react"
import Layout from "../components/Globals/layout.js"
const About = () => (
  <Layout>
    <h1 className="text-2xl text-teal-400">About</h1>
    <p>Welcome to your new Gatsby site.</p>
    <form name="contact" netlify>
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default About
