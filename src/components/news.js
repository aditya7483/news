import React, { Component } from 'react'
import Newscomp from './newscomp'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';

export default class News extends Component {

  static defaultProps = {
    pageLimit: 6,
    category:'',
    country: 'in'
  }

  static propTypes = {
    pageLimit: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 1,
      pageSize: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=445f58e1d17c4229b23e3965d19197c7&category=${this.props.category}&page=1&pagesize=${this.props.pageLimit}`;
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      loading: false,
      totalResults: data.totalResults,
      articles: data.articles,
      pageSize: Math.ceil(data.totalResults / this.props.pageLimit)
    });
  }

  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=445f58e1d17c4229b23e3965d19197c7&category=${this.props.category}&page=${this.state.page + 1}&pagesize=${this.props.pageLimit}`;
    
    this.setState({
      loading: true,
      page: this.state.page + 1,
    })

    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      loading: false,
      articles: this.state.articles.concat(data.articles),
    });
  }

   capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (<>
      <h1>
        {this.capitalize(this.props.category)}-Top Headlines
      </h1>
      
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {
              this.state.articles.map((elem) => {
                return <div className='col-md-4' key={elem.url}>
                  <Newscomp title={elem.title ? elem.title.slice(0, 50) : ""} url={elem.url} imgUrl={elem.urlToImage} description={elem.content ? elem.content.slice(0, 40) : ""} />
                </div>
              })
            }
          </div>
        </div>
      </InfiniteScroll>
    </>
    )
  }
}
