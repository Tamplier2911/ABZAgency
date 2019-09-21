import "../sass/Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

const onModalClick = () => {
  document.querySelector(".modal").style.display = "none";
};

// modal-hide modal-show
const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={onModalClick}>
      <div
        className="modal__body"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="modal__header">Congratulations!</h2>
        <p className="modal__close" onClick={onModalClick}>
          &#10006;
        </p>
        <p className="modal__description p-1">
          {props.desc}
        </p>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
