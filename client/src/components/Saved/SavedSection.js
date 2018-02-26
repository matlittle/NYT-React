import React from 'react';
import Article from './Article';

// Component to display saved articles

const SavedSection = props => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title text-center">Saved Articles</h3>
    </div>
    <div className="panel-body">
      { props.articles.length === 0 ?
        (<p> No saved articles yet</p>) :
        props.articles.map( (article, i) => (
          <Article article={article} key={i} {...props}/> 
        )) 
      }
    </div>
  </div>
)

export default SavedSection;
