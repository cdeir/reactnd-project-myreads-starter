import React from 'react';
import Book from './Book';
//{booksInBookshelf.map((book, index) => (
               //book.shelf === formalTitle ? : <div className="book"></div>
//const Shelf = props => {
class Shelf extends React.Component {
 constructor(props){
   super(props);
   const books = this.props.booksInBookshelf.map((book, key) => book.shelf === this.props.formalTitle ? (
     <Book key={book.id} id={book.id} books={this.props.booksInBookshelf} />
   ) : (<div key={book.id} className="empty"></div>));
   this.state = {
     books: books
   }
   // console.log(JSON.stringify(theBooks));
 }

    render(){
   return (
     <div className="bookshelf">
       <h2 className="bookshelf-title">{this.props.title}</h2>
       <div className="bookshelf-books">
         <ol className="books-grid">
           {this.state.books}
         </ol>
       </div>
     </div>
   )
 }
}

export default Shelf;
