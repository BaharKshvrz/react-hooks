import React, { useImperativeHandle, useRef } from 'react';

const ConfirmationModal = ({ isOpen, onClose }, ref) => {
  const closeRef = useRef(null);
  const denyRef = useRef(null);
  const confirmRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
        focusOnCloseBtn: () => closeRef.current.focus(),
        focusOnDenyBtn: () => denyRef.current.focus(),
        focusOnConfirmBtn: () => confirmRef.current.focus(),
    }
  }, []);

  return (
    <>
    {isOpen &&  <div className="modal">
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
         <h1>Title</h1>
      </div>
      <div className="modal-body">
         Do you confirm?
      </div>
      <div className="modal-footer">
      <button className="confirm-btn" ref={confirmRef}>
        Yes
      </button>
      <button className="deny-btn" ref={denyRef}>
        No
      </button>
      </div>
    </div>}
    </>
   
  )
}

export default React.forwardRef(ConfirmationModal)
