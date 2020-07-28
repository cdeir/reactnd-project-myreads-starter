import React from 'react';
import SearchBar from './SearchBar';
import FilteredBookList from './FilteredBookList';
import * as BooksAPI from './BooksAPI';

class Search extends React.Component {
  constructor(props){
    super(props);
    const filteredbooks = BooksAPI.search(this.state.searchText, 20);
    this.state = {
      searchText: ''

    }
  }

  handleSearchTextChange = (value) => {
    this.setState ({
      searchText: value
    })
  };

  filterBookList = () => {
    const filteredBooks = BooksAPI.search(this.state.searchText, 20);
  };

  render(){
    return (
      <div className="search">bookshelf
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
        <FilteredBookList filteredBookList={this.filteredBooks}/>
      </div>
    )
  }

}

export default Search;
