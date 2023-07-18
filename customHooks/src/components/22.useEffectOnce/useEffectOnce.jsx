import { useCallback, useEffect } from 'react'

const useEffectOnce = (cb) => {
   const cbFunc = useCallback(cb, [])
   useEffect(cbFunc, [cbFunc])
}

export default useEffectOnce
