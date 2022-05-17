import React, { Component } from 'react'
import Newscomp from './newscomp'
import Loading from './imgs/Loading.gif'
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    pageLimit: 6,
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
      pageSize: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=445f58e1d17c4229b23e3965d19197c7&page=1&pagesize=${this.props.pageLimit}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.totalResults)
    this.setState({
      loading: false,
      articles: data.articles,
      pageSize: Math.ceil(data.totalResults / this.props.pageLimit)
    });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=445f58e1d17c4229b23e3965d19197c7&page=${this.state.page + 1}&pagesize=${this.props.pageLimit}`;

    this.setState({ loading: true })

    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      loading: false,
      articles: data.articles,
      page: this.state.page + 1
    })

  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=445f58e1d17c4229b23e3965d19197c7&page=${this.state.page - 1}&pagesize=${this.props.pageLimit}`;

    this.setState({ loading: true })

    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      loading: false,
      articles: data.articles,
      page: this.state.page - 1
    })
  }


  //  handleFetch = async() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=445f58e1d17c4229b23e3965d19197c7&page=${this.state.page}&pagesize=${this.props.pageLimit}`;

  //   this.setState({ loading: true })

  //   let res = await fetch(url);
  //   let data = await res.json();
  //   this.setState({
  //     loading: false,
  //     articles: data.articles,

  //   });
  // }

  render() {
    return (<>

      <div className='container'>
        <div className='row'>

          {!this.state.loading ?
            this.state.articles.map((elem) => {
              return <div className='col-md-4'>
                <Newscomp title={elem.title ? elem.title.slice(0, 30) : ""} url={elem.url} imgUrl={elem.urlToImage} description={elem.content ? elem.content.slice(0, 40) : ""} />
              </div>
            }) :
            <img src={Loading} alt='hahahaha' />
          }

        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className={`btn btn-dark`} onClick={this.handlePrevClick} disabled={this.state.page <= this.state.pageSize}>&larr;Previous</button>
        <button type="button" className={`btn btn-dark`} onClick={this.handleNextClick} disabled={this.state.page === this.state.pageSize}>Next&rarr;</button>
      </div>
    </>
    )
  }
}
