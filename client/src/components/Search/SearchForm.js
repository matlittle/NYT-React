import React from 'react';
import FormGroup from './FormGroup';

// Main form for searches

class SearchForm extends React.Component {

  state = {
    topic: "",
    startDate: "",
    endDate: ""
  }

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSearch = e => {
    e.preventDefault();

    if ( !this.validateInput() ) {
      return;
    }

    this.props.articleSearch(this.state);
  }

  validateInput = () => {
    const { topic, startDate, endDate } = this.state;

    if (topic === "") {
      this.props.displayModal("Topic is required");
      return false;
    }
    if (startDate === "" || endDate === "") {
      this.props.displayModal("A Start and End date range are required");
      return false;
    }
    if ( !checkDate(startDate) || !checkDate(endDate) ) {
      this.props.displayModal("Invalid date format");
      return false;
    }

    return true;

    function checkDate(date) {
      const month = date.substr(4, 2), day = date.substr(6, 2);

      if (date.length !== 8 || month < 0 || month > 12 || day < 0 || day > 31) {
        return false;
      }
      return true;
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Search</h2>
        </div>
        <div className="panel-body">
          <form>
            <FormGroup name="topic" display="Topic" onChange={this.handleInputChange} />
            <FormGroup name="startDate" display="Start Date (YYYYMMDD)" onChange={this.handleInputChange} />
            <FormGroup name="endDate" display="End Date (YYYYMMDD)" onChange={this.handleInputChange} />
            <button
              type="submit"
              className="btn btn-default"
              id="search-btn"
              onClick={this.handleSearch}>Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchForm;
