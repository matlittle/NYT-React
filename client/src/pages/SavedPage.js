import React from 'react';
import SavedSection from '../components/Saved/SavedSection';
import Modal from '../components/Modal';
import API from '../utils/API';

class SavedPage extends React.Component {
  state = {
    articles: [],
    modal: { text: "", shown: false }
  }

  componentWillMount = () => {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSaved().then(res => {
      this.setState({articles: res.data});
    })
  }

  removeArticle = id => {
    API.delete(id).then(() => {
      this.setState({ articles: this.state.articles.filter(a => a._id !== id) });
      this.displayModal("Article removed");
    })
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
          <SavedSection 
            articles={this.state.articles} 
            removeArticle={this.removeArticle}
            displayModal={this.displayModal}/>
          <Modal modal={this.state.modal} onClick={this.closeModal}/>
        </div>
      </div>
    )
  }
}

export default SavedPage;
