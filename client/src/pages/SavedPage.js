import React from 'react';
import SavedSection from '../components/Saved/SavedSection';
import API from '../utils/API';

class SavedPage extends React.Component {
  state = {
    articles: []
  }

  componentWillMount = () => {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSaved().then(res => {
      console.log(res);
      this.setState({articles: res.data});
    })
  }

  removeArticle = id => {
    console.log('Remove Article fired');
    console.log(id);
    API.delete(id).then(() => {
      this.setState({ articles: this.state.articles.filter(a => a._id !== id) });
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <SavedSection 
            articles={this.state.articles} 
            removeArticle={this.removeArticle}/>
        </div>
      </div>
    )
  }
}

export default SavedPage;
