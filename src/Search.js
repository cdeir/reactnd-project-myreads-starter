import React from 'react';
import SearchBar from './SearchBar';
import FilteredBookList from './FilteredBookList';
import * as BooksAPI from './BooksAPI';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      filteredBooks: '',
    }
  }
  componentDidMount() {

      BooksAPI.search(this.state.searchText, 20).then(result => this.setState({ filteredBooks: result, listLoaded: true }))
      // this.setState({ toggle: !this.state.toggle })

  }
  handleSearchTextChange = (value) => {
    BooksAPI.search(value, 20).then(result => this.setState({ filteredBooks: result, listLoaded: true }));
    this.setState ({
      searchText: value
    })
    console.log(JSON.stringify(this.state))
  };

  filterBookList = () => {
    const filteredBooks = BooksAPI.search(this.state.searchText, 20);
  };

  render(){
    return (
      <div className="search">
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
        <FilteredBookList filteredBookList={this.state.filteredBooks}/>
      </div>
    )
  }

}

export default Search;
