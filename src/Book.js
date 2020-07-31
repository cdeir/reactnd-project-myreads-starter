import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
  constructor(props){
    super(props);
    const thisBook = this.props.books.filter(book => book.id === this.props.id);
    console.log(thisBook);
    this.state = {
      thisBook: thisBook
    }
  }
  handleChangeShelf = e => {
    console.log(e.target.value + " in handle change shelf!!!!");
    console.log(this.state.thisBook[0].id);
    BooksAPI.update({id: this.state.thisBook[0].id}, e.target.value).then(result => console.log);
    //this.props.onUpdateBook(this.state.thisBook[0].id, e.target.value);
  }
  assignShelf = () => {
    const flipThroughBooks = this.props.booksOnShelf;
    const exists = flipThroughBooks.map(book => book.id).indexOf(this.state.thisBook[0].id);
    console.log(exists);

    return exists < 0 ? "none" : this.props.booksOnShelf[exists].shelf;
  }
  //  const index = Data.map(e => e.name).indexOf('Nick');
  printAuthors = () => {
    let authorPrint = '';
    for(let [id, author] of this.state.thisBook[0].authors.entries()){
      id === (this.state.thisBook[0].authors.length - 1) ?
        authorPrint += author : authorPrint += author + " & ";

    }
    return authorPrint;
  }

 render(){
   return (
      <li key={this.state.thisBook[0].id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style= {{ width: 128, height: 193, backgroundImage: `url("${this.state.thisBook[0].imageLinks.thumbnail}%")`}}></div>
            <div className="book-shelf-changer">
              <select value={this.state.thisBook[0].hasOwnProperty('shelf') ? this.state.thisBook[0].shelf : this.assignShelf()}
                      onChange={this.handleChangeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.state.thisBook[0].title}</div>
          <div className="book-authors">{this.state.thisBook[0].hasOwnProperty('authors') && this.printAuthors()}</div>
        </div>
      </li>
   )
 }

}

export default Book;
