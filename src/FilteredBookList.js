import React from 'react';
import Book from './Book';

class FilteredBookList extends React.Component {
   constructor(props){
     super(props);
     console.log(this.props.filteredBooks);
     this.state = {
       bookPrint: this.props.filteredBooks.length > 0 ? this.props.filteredBooks.map((book, key) => (
         <Book key={book.id} id={book.id} books={this.props.filteredBooks} booksOnShelf={this.props.booksOnShelf} onUpdateBook={this.props.onUpdateBook} />
       )) : ''
     }
   }
   componentDidMount(){
     const booksToPrint = this.props.filteredBooks.length > 0 ? (this.props.filteredBooks.map((book, key) => (
       <Book key={book.id} id={book.id} books={this.props.filteredBooks} booksOnShelf={this.props.booksOnShelf} onUpdateBook={this.props.onUpdateBook} />
     ))) : '';
   }
 render(){
   console.log(this.props.filteredBooks);
   const printBooks = this.props.filteredBooks.length > 0 ? this.props.filteredBooks.map((book, key) => (
     <Book key={book.id} id={book.id} books={this.props.filteredBooks} booksOnShelf={this.props.booksOnShelf} onUpdateBook={this.props.onUpdateBook} />
   )) : <p>nothing here</p>;

   return (
     <div className="search-books-results">
       <ol className="books-grid">
         {printBooks}
       </ol>
     </div>
   )
 }

}

export default FilteredBookList;
