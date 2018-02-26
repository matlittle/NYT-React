import React from 'react';

// Component for an article's note

const rowStyle = {
  marginTop: "10px"
}

const Note = props => (
  <div className="row" style={rowStyle}>
    <div className="col-xs-10 col-xs-offset-1">
      <label htmlFor="note">Note</label>
      <div className="input-group">
        <input type="text" className="form-control" value={props.noteValue} 
          placeholder="Note" name="note" onChange={props.onChange}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" 
            onClick={props.onClick}>Save</button>
        </span>
      </div>
    </div>
  </div>
)


export default Note;
