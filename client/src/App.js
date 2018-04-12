import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actionTypes from './store/actions'

import './App.css'

class App extends Component {
  state = {
    books: [],
    collections: [],
    error: false
  };
  componentDidMount () {
    axios.get('/api/books/')
      .then(resp => {
        const updateBooks = resp.data
        this.setState({books: updateBooks})
      })
      .catch(error => {
        console.log(error)
      })
  }
  render () {
    let books = (
      <div> Something went wrong! </div>
    )
    if (!this.state.error) {
      books = this.props.books.map(book => {
        return (
          <div key={book._id}> {book.name} </div>
        )
      })
    }
    console.log(this.props)
    return (
      <div className="App">
        <br/>
        {books}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
  console.log(state.books)
}
const mapDispatchToProps = dispatch => {
  return {
    bookAdded: () => dispatch({tipe: actionTypes.ADD_BOOK}),
    bookRemoved: () => dispatch({tipe: actionTypes.REMOVE_BOOK})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
