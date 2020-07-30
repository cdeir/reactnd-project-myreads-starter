import React from 'react';
import Book from './Book';

class FilteredBookList extends React.Component {
  constructor(props){
    super(props);
    const bookPrint = this.props.filteredBooks.map((book, key) =>
      <Book key={book.id} id={book.id} books={this.props.filteredBooks} onUpdateBook={this.props.onUpdateBook} />
    );
    this.state = {
      bookPrint: bookPrint
    }
 }
 render(){
   return (
     <div className="search-books-results">
       <ol className="books-grid">
         {this.state.bookPrint}
       </ol>
     </div>
   )
 }

}

export default FilteredBookList;
