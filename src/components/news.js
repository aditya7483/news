import React, { Component } from 'react'
import Newscomp from './newscomp'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';



export default class News extends Component {

  static defaultProps = {
    pageLimit: 6,
    category: '',
    country: 'in',
    item: ''
  }

  static propTypes = {
    pageLimit: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category:PropTypes.string,
    item:PropTypes.string
  }

  constructor(props) {
    super();
    props.setItem('')
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 1,
      pageSize: 1
    }
  }

  fetchInitialData = async (url) => {
    this.props.setProgress(30);

    this.setState({
      loading: true,
    })

    this.props.setProgress(70);
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      loading: false,
      articles: data.articles,
      totalResults: data.totalResults,
      pageSize: Math.ceil(data.totalResults / this.props.pageLimit)
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=1&pagesize=${this.props.pageLimit}`;
    this.fetchInitialData(url);
  }

  async componentDidUpdate(prevProps) {

    if (prevProps.item !== this.props.item) {
      console.log('componentDidUpdate')
      this.setState({
        articles: [],
        loading: true,
        page: 1,
        totalResults: 1,
        pageSize: 1
      })
      let url = `https://newsapi.org/v2/everything?q=${this.props.item}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageLimit}`;
      this.fetchInitialData(url);
    }
  }

  fetchData = async () => {
    this.props.setProgress(30);
    let url;
    if (this.props.item === '') {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page + 1}&pagesize=${this.props.pageLimit}`;
    }
    else {
      url = `https://newsapi.org/v2/everything?q=${this.props.item}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageLimit}`;
    }
    this.setState({
      page: this.state.page + 1,
    })

    this.props.setProgress(70);
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
    });
    this.props.setProgress(100);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (<>
      
      <h1 style={{ textAlign: 'center', margin: '70px 0px 25px 0px' }}>
        {this.props.item===""?this.capitalize(this.props.category).concat('-Top Headlines'):"Search Results for '"+this.props.item+"'"}
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
                  <Newscomp title={elem.title ? elem.title.slice(0, 70) : ""} url={elem.url} imgUrl={elem.urlToImage} description={elem.content ? elem.content.slice(0, 50) : ""} author={elem.author ? elem.author.slice(0, 30) : ''} />
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
