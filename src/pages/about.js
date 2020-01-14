import React from "react"
import Layout from "../components/Globals/layout.js"
const About = () => (
  <Layout>
    <h1 className="text-2xl text-teal-400">About</h1>
    <p>Welcome to your new Gatsby site.</p>
    <form name="contact" method="POST" data-netlify="true" action="POST">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default About
