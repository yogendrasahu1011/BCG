import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

export default class store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      filteritems: props.items.edges,
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="store py-5">
          <div className="container">
            <Title title="BCG Store Front" />
            <div className="row mb-5">
              <div className="col">
                {/* {this.state.items.map(({node}))=>{}} */}
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="store py-5">
          <div className="container"></div>
          <Title title="BCG Store Front" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>No Items to display</h1>
            </div>
          </div>
        </section>
      )
    }
  }
}
