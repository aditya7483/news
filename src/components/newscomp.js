import React, { Component } from 'react'

export default class Newscomp extends Component {

  render() {

    return (<>
      <div class="card" style={{width: "18rem"}}>
        <img src={this.props.imgUrl?this.props.imgUrl:'...'} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.description}</p>
          <a href={this.props.url} class="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
    )
  }
}
