import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (<>
      <BrowserRouter>

        <Navbar />
        <Routes>

          <Route exact path="/general"  element={<News key="general" category={'general'} />} />
          <Route exact path="/sports" element={<News key="sports" category={'sports'} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category={'entertainment'} />} />
          <Route exact path="/health" element={<News key="health" category={'health'} />} />
          <Route exact path="/science" element={<News key="science" category={'science'} />} />
          <Route exact path="/" element={<News key="everything" />} />

        </Routes>

      </BrowserRouter>
    </>
    )
  }
}

