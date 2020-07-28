import React from 'react';
import Shelf from './Shelf';

class Bookshelf extends React.Component {
  // constructor(props){
  //   super(props);
  //   // console.log(JSON.stringify(this.props.booksInBookshelf));
  // }
 render(){
   return (
     <div className="bookshelf">
       <Shelf title='Currently Reading' formalTitle='currentlyReading' booksInBookshelf={this.props.booksInBookshelf} />
       <Shelf title='Want to Read' formalTitle='wantToRead' booksInBookshelf={this.props.booksInBookshelf} />
       <Shelf title='Read' formalTitle='read' booksInBookshelf={this.props.booksInBookshelf} />
     </div>
   )
 }

}

export default Bookshelf;
