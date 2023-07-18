import useEventListener from '../15.useEventListener/useEventListener'

/*
In React, the ref attribute allows you to create a reference to a DOM element. 
The useRef hook is used to create a mutable ref object, which can be accessed using the current property.

The contains method is a DOM API method that checks if an element contains another element within its hierarchy. 
In this case, ref.current.contains(event.target) checks if the clicked event.target element is contained within the modal element.
If it's not contained, it means the click occurred outside of the modal, and the condition !ref.current.contains(event.target) evaluates to true.
*/

const useClickOutside = (ref, cb) => {
   useEventListener(
      "mousedown",
      e => {
        if (ref.current == null || ref.current.contains(e.target)) return
        cb(e)
       },
       document
   );
}

export default useClickOutside
