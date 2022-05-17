import Navbar from "./components/navbar";
import News from "./components/news";

import React, { Component } from 'react'
import Newscomp from "./components/newscomp";

export default class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <News/>
    </>
    )
  }
}

