import React, { Component } from 'react';
import './BookList.css';
import Book from '../Book/Book';

class BookList extends Component {


  //   if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {

  render() {
    return (
      <div className="BookList">
        {
          this.props.items.slice(0, 10).map(item => {
            return <Book key={item.id} item={item} />
          })
        }
      </div>
    );
  }
}

export default BookList;
