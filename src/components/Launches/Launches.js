import React, { Component } from 'react'
import './launches.css'

export default class Launches extends Component {
  render() {
    return (
      <article className="launches">
        <div className="launches-image">
          <img src={this.props.image} alt="" />
          {/* <img src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" alt="" /> */}
        </div>
        <div className="launches-content">
          <h2 className="launches-title">
            <a href={this.props.link}>
              {this.props.text}
            </a>
            {/* <a href="https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html">
              DemoSat
            </a> */}
          </h2>
          <a href="./details.html" className="button launches-details">Подробнее</a>
        </div>
      </article>
    )
  }
}
