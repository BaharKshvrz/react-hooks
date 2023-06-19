# React UseCallback Hook

useCallback is a React Hook that lets you cache a function definition between re-renders.
const cachedFn = useCallback(fn, dependencies)

## Usage
- Skipping re-rendering of components
- Updating state from a memoized callback
- Preventing an Effect from firing too often
- Optimizing a custom Hook: If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns into useCallback:



