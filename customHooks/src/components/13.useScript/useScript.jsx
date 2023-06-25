import useAsync from '../11.useAsync/useAsync'

const useScript = (url) => {
    return useAsync(() => {
        const script = document.createElement("script")
        script.src = url
        script.async = true
    
        return new Promise((resolve, reject) => {
          // the better from my ponit of view
          // script.addEventListener("load", (ev) => {
          //   resolve({ status: true });
          // });
          script.addEventListener("load", resolve)
          script.addEventListener("error", reject)
          document.body.appendChild(script)
        })
      }, [url])
}

export default useScript
