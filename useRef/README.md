# React useRef Hook

useRef is a React Hook that lets you reference a value that’s not needed for rendering.
const ref = useRef(initialValue)


## Usage:
1- The useRef Hook allows you to persist values between renders.

2- It can be used to store a mutable value that does not cause a re-render when updated.
 
 Does Not Cause Re-renders
- If we tried to count how many times our application renders using the useState Hook,
  we would be caught in an infinite loop  since this Hook itself causes a re-render.
 - To avoid this, we can use the useRef Hook.

3- It can be used to access a DOM element directly.


