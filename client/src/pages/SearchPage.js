import React from 'react';
import SearchForm from '../components/Search/SearchForm';
import ResultSection from '../components/Results/ResultSection';
import Modal from '../components/Modal';
import API from '../utils/API';

// Main search page component for search form and results

class SearchPage extends React.Component {
  state = {
    searchResults: [],
    results: true,
    modal: { text: "", shown: false }
  }

  articleSearch = parameters => {
    API.search(parameters).then( res => {
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
    API.save(this.state.searchResults[index])
      .then(res => this.handleArticleSave(index))
      .catch(err => console.log(err));
  }

  handleArticleSave = index => {
    this.setState({ searchResults: this.state.searchResults.filter((el, i) => i !== index) })
    this.displayModal("Article saved");
  }

  displayModal = text => {
    this.setState({ modal: { text: text,  shown: true } });
  }

  closeModal = e => {
    e.preventDefault();
    this.setState({ modal: { text: "", shown: false } });
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <SearchForm articleSearch={this.articleSearch} displayModal={this.displayModal}/>
          { !this.state.results || this.state.searchResults.length > 0 ? 
            <ResultSection 
              results={this.state.searchResults} 
              saveArticle={this.saveArticle}
              displayModal={this.displayModal}/> : 
            "" }
          <Modal modal={this.state.modal} onClick={this.closeModal} />
        </div>
      </div>
    )
  }
}

export default SearchPage;
