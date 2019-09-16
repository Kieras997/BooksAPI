import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      term2: '',
      sortBy: 'inauthor'
    };

    this.sortByOptions = {
      'Author': 'inauthor',
      'Publisher': 'inpublisher'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleTerm2Change = this.handleTerm2Change.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption })
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleTerm2Change(event) {
    this.setState({ term2: event.target.value });
  }

  handleSearch(event) {
    this.props.searchBooks(this.state.term, this.state.term2, this.state.sortBy);

    event.preventDefault();
  }

  renderSortBy() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue}
      className={this.getSortByClass(sortByOptionValue)}
      onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
      {sortByOption}</li>
    })
  }

  render() {
    return (
      <div>
        <div className="SortBy">
          <ul>{this.renderSortBy()}</ul>
        </div>
        <div className="SearchBar">
          <input className="Input" placeholder="Book title" onChange={this.handleTermChange} />
          <input className="Input" placeholder="Book author/publisher" onChange={this.handleTerm2Change} />
          <div className="Button" onClick={this.searchBooks}>
            <a onClick={this.handleSearch}>Search</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
