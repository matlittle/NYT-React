import React from 'react';

// component to display individual article results

const btnStyle = {
  display: "block",
  margin: "20px auto 0"
}

const Article = props => (
  <div className="panel panel-default">
    <div className="panel-body">
      <div className="col-xs-8 col-sm-10">
        <h3><a target="_blank" href={props.article.web_url}>{props.article.headline}</a></h3>
        <p>{props.article.snippet}</p>
      </div>
      <div className="col-xs-4 col-sm-2">
        <button className="btn btn-primary" style={btnStyle}
          onClick={() => props.saveArticle(props.articleIndex)}>Save</button>
      </div>
    </div>
  </div>
)

export default Article;
