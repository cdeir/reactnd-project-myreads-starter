import React from 'react';
import SearchBar from './SearchBar';
import FilteredBookList from './FilteredBookList';
import * as BooksAPI from './BooksAPI';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      filteredBooks: [],
    }
  }

  handleSearchTextChange = (e) => {
    console.log(e.target.value);
    e.target.value !== '' ? BooksAPI.search(`${e.target.value}`, 20).then(result => (
      console.log(result + " result"),
      this.setState({ filteredBooks: result}))) :
      this.setState({ filteredBooks: []});
    this.setState ({
      searchText: e.target.value
    })
    console.log(JSON.stringify(this.state));
  };

  filterBookList = () => {
    const filteredBooks = BooksAPI.search(this.state.searchText, 20);
  };

  render(){
    return (
        <div className="search-books">
          <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />

          <FilteredBookList filteredBooks={this.state.filteredBooks} booksOnShelf={this.props.booksInBookshelf}/>
        </div>

    )
  }

}

export default Search;
