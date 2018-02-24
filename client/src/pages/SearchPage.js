import React from 'react';
import SearchForm from '../components/Search/SearchForm';
import ResultSection from '../components/Results/ResultSection';

// Main search page component for search form and results

class SearchPage extends React.Component {
  state = {
    searchResults: []
  }

  articleSearch = (paramaters) => {

  }

  render() {
    return (
      <div>
        <SearchForm />
        { this.state.searchResults.length > 0 ? <ResultSection results={this.state.searchResults} /> : "" }
      </div>
    )
  }
}

export default SearchPage;
