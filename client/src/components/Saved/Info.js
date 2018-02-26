import React from 'react';

// Component to display saved article info

const btnStyle = {
  display: "block",
  margin: "20px auto 0"
}

const Info = props => (
  <div className="row">
    <div className="col-xs-8 col-sm-10">
      <h3><a target="_blank" href={props.article.web_url}>{props.article.headline}</a></h3>
      <p>{props.article.snippet}</p>
    </div>
    <div className="col-xs-4 col-sm-2">
      <button className="btn btn-danger" style={btnStyle}
        onClick={() => props.removeArticle(props.article._id)}>Remove</button>
    </div>
  </div>
)

export default Info;
