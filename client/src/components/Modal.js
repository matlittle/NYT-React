import React from 'react';
import '../styles/modal.css';

// Component for modal

const Modal = props => (
  <div className={`modal-main ${props.modal.shown ? "modal-show" : "modal-hide"}`} >
    <div className="modal-backdrop" onClick={props.onClick}>
      <div className="modal-body col-xs-6 col-sm-4" >
        <div className="panel panel-default">
          <div className="panel-body">
            <button type="button" className="close" onClick={props.onClick}>
              <span aria-hidden="true">&times;</span>
            </button>
            {props.modal.text}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Modal;
