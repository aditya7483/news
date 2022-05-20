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

          <Route exact path="/" key="everything" element={<News/>} />
          <Route exact path="/general" key="general" element={<News category={'general'} />} />
          <Route exact path="/sports" key="sports" element={<News category={'sports'} />} />
          <Route exact path="/entertainment" key="entertainment" element={<News category={'entertainment'} />} />
          <Route exact path="/health" key="health" element={<News category={'health'} />} />
          <Route exact path="/science" key="science" element={<News category={'science'} />} />

        </Routes>

      </BrowserRouter>
    </>
    )
  }
}

