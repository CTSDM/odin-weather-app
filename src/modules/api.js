const API_KEY = '4de9017fc112428aba375148242703';
const BASE_URL = 'http://api.weatherapi.com/v1';
const API_METHODS = ['current.json'];

async function getJSON(city, api_method) {
    try {
        const response = await fetch(
            `${BASE_URL}/${api_method}?key=${API_KEY}&q=${city}`
            , { mode: 'cors' }
        );
        return response.json();
    } catch (e) {
        // how could i trigger an error here?
        // if the api never responds i cannot catch it with this
        console.log('something went wrong while fetching the api');
    }
}

async function getCurrentRawWeatherObj(city) {
    const api_method = API_METHODS[0];
    const responseJson = await getJSON(city, api_method);
    return {
        location: responseJson.location,
        status: {
            condition: responseJson.current.condition.text,
            feelslike: responseJson.current.feelslike_c,
            temp: responseJson.current.temp_c,
            humidity: responseJson.current.humidity,
        },
        iconURL: responseJson.current.condition.icon,
    }
}

export { getCurrentRawWeatherObj }
