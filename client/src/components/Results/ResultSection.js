import React from 'react';
import Article from './Article';

// Component to display results from a search

const ResultSection = props => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title text-center">Results</h3>
    </div>
    <div className="panel-body">
      { props.results.length === 0 ?
        (<p> No search results found</p>) :
        props.results.map( (article, i) => (
          <Article article={article} articleIndex={i} key={i} {...props}/> 
        )) 
      }
    </div>
  </div>
)

export default ResultSection;
