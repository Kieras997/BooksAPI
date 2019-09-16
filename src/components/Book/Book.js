import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  truncuate() {
    const desc = this.props.item.description;
    if(desc) {
      if(desc.length > 150) {
        return <p>{desc.substring(0,150) + '...'}</p>
      } else {
        return <p>{desc}</p>
      }
    }
  }

  render() {
    return (
      <div className="Book">
        <div className="Info">
        <h2>{this.props.item.title}</h2>
        <img src={this.props.item.image} alt="" />
        {this.truncuate()}
        <p>Author: {this.props.item.author}</p>
        <p>Publisher: {this.props.item.publisher}</p>
        </div>
      </div>
    );
  }
}

export default Book;
