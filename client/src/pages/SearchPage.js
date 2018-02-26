import React from 'react';
import SearchForm from '../components/Search/SearchForm';
import ResultSection from '../components/Results/ResultSection';
import API from '../utils/API';

// Main search page component for search form and results

class SearchPage extends React.Component {
  state = {
    searchResults: [],
    results: true
  }

  articleSearch = parameters => {
    API.search(parameters).then( res => {
      console.log(res);
      const articles = res.data.response.docs.map(a => {
        return {
          web_url: a.web_url,
          snippet: a.snippet,
          headline: a.headline.main
        }
      });

      this.setState({
        searchResults: articles,
        results: articles.length > 0 ? true : false
      });
    });
  }

  saveArticle = index => {
    console.log('Save Article fired');
    console.log(index);
    console.log(this.state.searchResults[index]);
    API.save(this.state.searchResults[index])
      .then(res => alert("Article saved") )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <SearchForm articleSearch={this.articleSearch}/>
          { !this.state.results || this.state.searchResults.length > 0 ? 
            <ResultSection results={this.state.searchResults} saveArticle={this.saveArticle}/> : 
            "" }
        </div>
      </div>
    )
  }
}

export default SearchPage;
