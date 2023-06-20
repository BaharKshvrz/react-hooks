import { useLayoutEffect, useRef, useState } from 'react';

const Modal = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const {bottom} = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 50}px`
  }, [show]);

  return (
    <>
         <button ref={button} onClick={() => setShow(prev => !prev)}>
            Show Modal
         </button>
         { show && (
           <div style={{position: "absolute"}} ref={popup}>
              This is a Popup
           </div>
         )
         }
    </>
  )
}

export default Modal
