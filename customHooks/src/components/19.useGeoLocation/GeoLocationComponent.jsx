import useGeoLocation from './useGeoLocation';

/*
The Geolocation API allows the user to provide their location to web applications if they so desire.
For privacy reasons, the user is asked for permission to report location information.
*/

const GeoLocationComponent = () => {
  const { 
          loading,
          error,
          data: { latitude, longitude }
         } = useGeoLocation();

  return (
    <>
         <div> Loading: { loading.toString() }</div> 
         <div> Error: { error?.message() }</div> 
         <div> {latitude} * {longitude} </div>
    </>
  )
}

export default GeoLocationComponent
