import React from 'react';

import { useModalContext } from './modal.context';
import './styles.css';

const Modal = () => {
  const {
    modalState: { displayItem, title, visible },
    closeModal,
  } = useModalContext();
  return (
    <div className="modal-holder" style={{ display: `${visible}` }}>
      <div className="modal-content-holder">
        <div className="modal-content">
          <div className="modal-title-holder">{title}</div>
          <div className="modal-text-holder">{displayItem}</div>
          <div className="modal-footer-holder">
            <button className="modal-dismiss-button" onClick={closeModal}>
              Dispensar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
