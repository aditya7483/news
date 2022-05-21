import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  constructor(){
    super();
    this.state={
      progress:0,
    }
  }

  setProgress=(n)=>{
    this.setState({
      progress:n
    })
  }

  render() {
    return (<>
      <BrowserRouter>

      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />

        <Navbar />

        <Routes>

          <Route exact path="/"  element={<News setProgress={this.setProgress} key="general" category={'general'} />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" category={'sports'} />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category={'entertainment'} />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category={'health'} />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category={'science'} />} />

        </Routes>

      </BrowserRouter>
    </>
    )
  }
}

