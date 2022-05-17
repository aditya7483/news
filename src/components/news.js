import React, { Component } from 'react'
import Newscomp from './newscomp'
import Loading from './imgs/Loading.gif'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading:true
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=445f58e1d17c4229b23e3965d19197c7";
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      loading:false,
      articles: data.articles 
    });
  }


  render() {
    return (<>

      <div className='container'>
        <div className='row'>
          
          {!this.state.loading?this.state.articles.map((elem) => {
            return <div className='col-md-4'>
              <Newscomp title={elem.title ? elem.title.slice(0, 30) : ""} url={elem.url} imgUrl={elem.urlToImage} description={elem.content ? elem.content.slice(0, 40) : ""} />
            </div>
          }):<img src={Loading} alt='hahahaha'/>
          }

        </div>
      </div>
    </>
    )
  }
}
