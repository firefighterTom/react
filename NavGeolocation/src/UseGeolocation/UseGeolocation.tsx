import { useEffect } from 'react';
import { useState } from 'react';

export function UseGeolocation() {
	const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
	const [error, setError] = useState<Error|undefined>();

// type Position={
//    coords:{
//     latitude:number,
//     longitude:number
//    } 

// }
type Error={
    message:string
}


    useEffect(() => {
        const successCallback = (position:GeolocationPosition) => {
            console.log(position)
            setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        };
    
        const errorCallback = (error:GeolocationPositionError) => {
            console.log(error)
            setError(error);
        };
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
       
      },[]);
    
	
	return {
		coords,
		error,
	};
}
