import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import BookList from '../BookList/BookList';
import Books from '../../util/Books';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.searchBooks = this.searchBooks.bind(this);
  }

  searchBooks(term, term2, sortBy) {
    Books.search(term, term2, sortBy).then(items => {
      this.setState({ items: items });
      console.log(term);
      console.log(term2);
      console.log(sortBy);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Search for books</h1>
        <SearchBar searchBooks={this.searchBooks} />
        <BookList items={this.state.items} />
      </div>
    );
  }
}

export default App;
