import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    //portal lets us directly attach the modal to the body of the html
    return ReactDOM.createPortal(
        <div
         onClick={props.onDismiss}  //this will redirect users to homepage if they are clicking anywhere by default due to bubble effect(default js behaviour)
         className="ui dimmer modals visible active" 
        >
            <div
             onClick={(e) => e.stopPropagation()}  //this makes the body not follow bubble effect and makes the upper onClick not work on the body
             className="ui standard modal visible active" 
            >
                <div className="header" >{props.title}</div>
                <div className="content" >{props.content}</div>
                <div className="actions" >{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;