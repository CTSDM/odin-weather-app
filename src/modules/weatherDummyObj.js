import imgUNKNOWN from '../img/alert-circle.svg';

export default function getDummyWeatherObj() {
    const dummyWeatherObj = {
        location: 'UNKNOWN',
        status: {
            conditon: '???',
            feelslike: '???',
            temp: '???',
            humidity: '???',
        },
        iconURL: imgUNKNOWN,
    }
    return dummyWeatherObj;
}
