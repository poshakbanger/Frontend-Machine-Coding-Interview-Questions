import React, { useEffect } from 'react'
import "./Modal.css";
const Modal = ({ isOpen, onClose, title, children }) => {

  useEffect(() => {
    const handleKeyDown = (e) =>{
      if(e.key === "Escape" && isOpen){
        onClose();
      }
    };
    window.addEventListener("keydown",handleKeyDown);
    return window.removeEventListener("keydown",handleKeyDown);
  },[isOpen,onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
        <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;