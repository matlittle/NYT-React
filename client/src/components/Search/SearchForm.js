import React from 'react';
import FormGroup from './FormGroup';

// Main form for searches

class SearchForm extends React.Component {

  state = {
    topic: "",
    startYear: "",
    endYear: ""
  }

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSearch = () => {
    this.props.searchForArticles(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              <form>
                <FormGroup name="topic" displayName="Topic" onChange={this.handleInputChange} />
                <FormGroup name="startYear" displayName="Start Year" onChange={this.handleInputChange} />
                <FormGroup name="endYear" displayName="End Year" onChange={this.handleInputChange} />
                <button 
                  type="submit" 
                  className="btn btn-default" 
                  id="search-btn"
                  onClick={this.handleSearch}>Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;
