import React, { useRef, useState } from 'react'
import ConfirmationModal from './components/ConfirmationModal';

const Modal = () => {
  const [open, setOpen] = useState(false);  
  const modalRf = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRf.current.focusOnCloseBtn()}>Focus Close</button>
      <button onClick={() => modalRf.current.focusOnConfirmBtn()}>Focus Confirm</button>
      <button onClick={() => modalRf.current.focusOnDenyBtn()}>Focus Deny</button>
      <ConfirmationModal
        ref={modalRf}
        isOpen={open}
        onClose= {() => setOpen(false)}
      />
    </>
  )
}

export default Modal
