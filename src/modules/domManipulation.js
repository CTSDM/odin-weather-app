const iconImage = document.getElementById('weather-icon');
const imgWeatherArr = document.querySelectorAll('img.weather');
const form = document.querySelector('form');

import './api.js'
import { getCurrentRawWeatherObj } from './api.js';
import getDummyWeatherObj from './weatherDummyObj.js';
import getCountryFlagSrc from './api_flag.js';

form.addEventListener('submit', submitFoo);

export default function start(city) {
    (async function() {
        updateDOM(await getWeatherObj(city));
    })();
}

async function submitFoo(eventHandler) {
    eventHandler.preventDefault();
    updateDOM(await getWeatherObj(getInputLocation()));
}

async function getWeatherObj(location) {
    let weatherObj;
    try {
        if (checkInputValidty()) {
            weatherObj = await getCurrentRawWeatherObj(location);
        }
    } catch (e) {
        weatherObj = getDummyWeatherObj();
    }
    return weatherObj;
}

function getInputLocation() {
    const inputLocation = form.querySelector('input');
    return inputLocation.value;
}

function checkInputValidty() {
    const inputLocation = form.querySelector('input');
    if (inputLocation.value.length < 0)
        return false;
    return true;
}

function updateDOM(weatherObj) {
    const location = weatherObj.location;
    const weatherIcon = weatherObj.iconURL;
    const weatherStatus = weatherObj.status;
    updateCity(location);
    updateCountry(location);
    updateTemperature(weatherObj.status.temp);
    updateTemperatureFeeling(weatherObj.status.feelslike);
    updateCondition(weatherObj.status.condition);
    updateHumidity(weatherObj.status.humidity);
    updateImages(weatherIcon, weatherStatus);
}

function updateImages(icon) {
    setIcon(icon);
}

function updateCity(location) {
    const cityElement = document.getElementById('city');
    cityElement.textContent = location.name;
}

function updateTemperature(temp) {
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.textContent = String(temp);
}

function updateHumidity(humidity) {
    const humEl = document.getElementById('humidity');
    humEl.textContent = humidity;
}

function updateCondition(condition) {
    const conditionElement = document.getElementById('condition');
    conditionElement.textContent = condition;
}

function updateTemperatureFeeling(tempFeel) {
    const temperatureFeelsElement = document.getElementById('temp-feel');
    temperatureFeelsElement.textContent = String(tempFeel);
}

function updateCountry(location) {
    const countryElement = document.getElementById('country');
    const country = location.country;
    countryElement.textContent = country;
    updateCountryFlag(country);
}

async function updateCountryFlag(country) {
    const countryFlagElement = document.getElementById('country-flag');
    const srcFlag = await getCountryFlagSrc(country);
    countryFlagElement.src = srcFlag;
}

function setIcon(icon) {
    iconImage.src = icon;
}

function setImage(typeWeather) {

}
