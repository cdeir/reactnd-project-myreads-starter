import React from 'react';
import Book from './Book';

class BookDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      book: {
        id: this.props.book.id,
        title : this.props.book.title,
        author: this.props.book.author,
        rating: this.props.book.rating,
        notes : this.props.book.notes
      }
    }
  }
  render(){
    return (
      <p>bookshelf</p>
    )
  }

}

export default BookDetail;
