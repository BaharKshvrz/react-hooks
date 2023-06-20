# React useLayoutEffect Hook

useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
useLayoutEffect(setup, dependencies?)


## How?
useLayoutEffect blocks the browser from repainting.
Effects only run on the client. They don’t run during server rendering.
The code inside useLayoutEffect and all state updates scheduled from it block the browser from repainting the screen. When used excessively, this makes your app slow. When possible, prefer useEffect.

Pitfall: useLayoutEffect can hurt performance. Prefer useEffect when possible.