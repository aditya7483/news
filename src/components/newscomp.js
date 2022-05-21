import React, { Component } from 'react'
import DefaultImg from './imgs/default.png'

export default class Newscomp extends Component {

  render() {

    return (<>
      <div className="card" style={{ width: "18rem", margin: '20px auto' }}>
        <img src={this.props.imgUrl ? this.props.imgUrl : DefaultImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <span class="badge text-bg-secondary" style={{
            position: " relative",
            top: "-38px",
            left: "-16px",
            color: "#1c1c1c",
            backgroundColor: "#ada6a6"
          }}>this.props.source</span>
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.url} target='_blank' rel='noreferrer' className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
    )
  }
}
