import React from 'react';
import Note from './Note';
import Info from './Info';
import API from '../../utils/API';

// component to display individual saved article

class Article extends React.Component {
  state = {
    note: this.props.article.note
  }

  handleNoteChange = e => {
    e.preventDefault();
    this.setState({ note: e.target.value });
  }

  handleNoteSave = e => {
    e.preventDefault();
    API.update(this.props.article._id, {note: this.state.note})
      .then(() => {alert("Note saved");})
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <Info {...this.props} />
          <Note {...this.props} 
            noteValue={this.state.note}
            onChange={this.handleNoteChange} 
            onClick={this.handleNoteSave}/>
        </div>
      </div>
    )
  }
}

export default Article;
