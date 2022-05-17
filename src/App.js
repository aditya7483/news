import Navbar from "./components/navbar";
import News from "./components/news";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <News pageLimit={6}/>
    </>
    )
  }
}

