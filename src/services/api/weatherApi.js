//utils
import { randomFromArray } from '../../shared/utils/functions'

//lets simulate we are doing the request against a real API. The "API" will return randomly 1 value of the following array.
const weather = ['sunny', 'cloudy', 'rainy']

export const getWeather = async () => {
    // const requestOptions = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    
    // const response = await fetch(`apiUrl`, requestOptions);
    // const data = await response.json();

    // lets simulate a delay
    await new Promise(r => setTimeout(r, 2000));

    const data = randomFromArray(weather) //simulating await response.json()
    const responseOk = true //simulating response.ok

    if (responseOk) {
        return({status:true, value: data})
    } else {
        return({status:false})
    }
}