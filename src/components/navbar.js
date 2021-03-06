import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

  constructor(){
    super();
    this.state={
      text:''
    }
  }

  handleSearch=(e)=>{
    e.preventDefault()
    this.props.setSearch(this.state.text)
  }

  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News74</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search" onSubmit={this.handleSearch}>
              <input className="form-control me-2" value={this.state.value} type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>

      </div>
    )
  }
}
