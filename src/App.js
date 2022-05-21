import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API_1
  
  constructor(){
    super();
    this.state={
      progress:0,
      search:''
    }
  }

  setProgress=(n)=>{
    this.setState({
      progress:n
    })
  }

  setSearch=(n)=>{
    this.setState({
      search:n
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

        <Navbar setSearch={this.setSearch}/>

        <Routes>

          <Route exact path="/"  element={<News apiKey={this.apiKey}setProgress={this.setProgress} item={this.state.search} key="general" category={'general'} />} />
          <Route exact path="/sports" element={<News apiKey={this.apiKey}setProgress={this.setProgress} item={this.state.search} key="sports" category={'sports'} />} />
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey}setProgress={this.setProgress} item={this.state.search} key="entertainment" category={'entertainment'} />} />
          <Route exact path="/health" element={<News apiKey={this.apiKey}setProgress={this.setProgress} item={this.state.search} key="health" category={'health'} />} />
          <Route exact path="/science" element={<News apiKey={this.apiKey}setProgress={this.setProgress} item={this.state.search} key="science" category={'science'} />} />

        </Routes>

      </BrowserRouter>
    </>
    )
  }
}

